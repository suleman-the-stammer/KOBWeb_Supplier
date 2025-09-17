import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ANT-D :
import { Input, Form, Select, Button, Tag, Space } from 'antd'

// Components :
import { ConfirmationModal } from 'src/components/common';
import { SocialMediaArray } from 'src/constants';
import { ImageUploader, PageHeading, SecurityQuestionsModal } from 'src/components';

// ICONS :
import { BsCheckLg } from 'react-icons/bs';
import { PiPlusBold } from 'react-icons/pi';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbAlertTriangle } from 'react-icons/tb';


// Helpers :
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// Redux :
import { useDispatch, useSelector } from 'react-redux';

// Services :
import AuthService from 'src/services/auth.services';
import getLocations from 'src/services/locations.services';
import getCategories from 'src/services/categories.services';
import SecurityServices from 'src/services/security.question.services';

// CSS :
import './sign-up.scss'

const { Option } = Select;

const SocialMediaObj = {};

SocialMediaArray.map(el => {
  SocialMediaObj[el.name] = el;
})

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};

const SignUp = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectorRef = useRef(null);

  const { user } = useSelector((state) => state.signIn);
  const { categories } = useSelector((state) => state.categories);
  const { isLoading, error } = useSelector((state) => state.register);
  const { countries, states, cities } = useSelector((state) => state.locations);

  const [questionsArray, setQuestionsArray] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [openClearModal, setOpenClearModal] = useState(false);
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const [questionsModal, setQuestionsModal] = useState(false);
  const [locations, setLocations] = useState({ country: "", state: "" });
  const [shouldOptionsVisible, setShouldOptionsVisible] = useState(false);

  const [input, setInput] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [optionsVisible]);

  useEffect(() => {
    let path = location.pathname.includes("edit-register");
    console.log("pppp", path)
    if (path) {
      form.setFieldsValue(user);
    }
  }, [location.pathname])

  useEffect(() => {
    (() => {
      SecurityServices.getQuestions(dispatch);
    })()
  }, []);

  const handleClickOutside = (event) => {
    if (selectorRef.current && !selectorRef.current.contains(event.target)) {
      setOptionsVisible(false);
    }
  };

  // ********************* Functions *********************

  const handleClear = () => setOpenClearModal(true);

  const hanldeRegister = async (values) => {
    console.log("=-=-=-==-", values)

    const formData = new FormData();

    questionsArray
      .map((item, index) => {
        formData.append(`securityAnswers[${index}][item.questionId]`, item.questionId);
        formData.append(`securityAnswers[${index}][answer]`, item.answer);
      })

    const socialMediaFields = ["tiktok", "twitter", "youtube", "whatsapp", "facebook", "linkedin", "instagram", "wechat"];
    const socialMedia = {};

    for (const field of socialMediaFields) {
      socialMedia[field] = values[field];
      delete values[field];
    }
    const fieldsToDelete = ["whatsapps", "socialmedia", "confirmPassword"];

    for (const field of fieldsToDelete) {
      delete values[field];
    }

    values = { ...values, socialMedia, questionsArray };


    console.log("=-=-=-==-", values)
    let [success, error] = await AuthService.register(dispatch, values);
    if (success?.data?.isSuccess) { setShouldModalOpen(true); }
  };

  const handleCountries = (value) => {
    const words = value.split(' ');
    const countryCode = words[words.length - 1];
    setLocations({ ...locations, country: countryCode });
    getLocations.states(countryCode, dispatch)
  }
  const handleStates = (value) => {
    const words = value.split(' ');
    const stateCode = words[words.length - 1];
    setLocations(prevState => ({ ...prevState, state: stateCode }));
    getLocations.cities({ ...locations, state: stateCode }, dispatch);
  }

  // Tags Created Fun:
  const handleTagClose = (option) => {
    const getSocialMedia = form.getFieldValue("socialmedia");
    // const setSocialMedia = getSocialMedia.filter((item) => item !== option);
    const setSocialMedia = selectedOption.filter((item) => item !== option);
    setSelectedOption(setSocialMedia);
    form.setFieldValue("socialmedia", setSocialMedia);
  };
  const handleCategoryClick = (categoryId) => {
    setOptionsVisible(false);
    form.setFieldsValue({ categories: categoryId });
  }
  const handleChangeSocialMeida = (values) => {
    setSelectedOption(values)
    setShouldOptionsVisible(false)
  }
  const handleInputChange = (value) => {
    setInput(value);
    setOptionsVisible(true);
    getCategories.categories(value, dispatch);
  }
  // Success Register Modal :
  const handleOK = () => {
    setShouldModalOpen(false);
    // form.resetFields();
    // navigate('/login');
  }

  // Clear Form Modal :
  const handleModelClose = () => setOpenClearModal(false);
  const handleModalClear = () => {
    form.resetFields();
    setOpenClearModal(false);
  }

  // Dropdown Visible :
  const handleDropdownVisibleChange = (open) => setShouldOptionsVisible(open);

  // const customEmailValidator = async ( value) => {
  //   console.log("-------------", error?.email);
  //   console.log("------------->", value);

  //   if (!value) {
  //     return Promise.resolve();
  //   }

  //   if (error?.alreadyTaken?.email) {
  //     return Promise.reject('This email is already exist');
  //   }

  //   return Promise.resolve();
  // };
  const customEmailValidator2 = async (rule, value) => {

    if (value) {
      return Promise.resolve();
    }

    if (error?.username == undefined) {
      console.log("-------------", error?.email)
      return Promise.reject('This email is already exist');
    }

    return Promise.resolve();
  };
  const customEmailValidator3 = async (rule, value) => {

    if (value) {
      return Promise.resolve();
    }

    if (error?.phone == undefined) {
      console.log("-------------", error?.email)
      return Promise.reject('This email is already exist');
    }

    return Promise.resolve();
  };

  const handleSecurityQuestions = () => {
    setQuestionsModal(true);
  }

  return (
    <>
      <div className="sign-up-container">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          className="sign-up-form"
          onFinish={hanldeRegister}
          validateMessages={validateMessages}
        >
          <div className="form">
            <div className="heading-position">
              <PageHeading
                upperTitle="New"
                title="Registration"
                bottomTitle="Please enter your details below"
              />
            </div>
            <div className="flex-details">

              <Form.Item label="" name="companyLogo" className="registration-field company-logo">
                <ImageUploader />
                {/* <div className='company-logo'>Company Logo</div> */}
              </Form.Item>

              <Form.Item label="Type" name="type" className="registration-field" rules={[{ required: true }]}>
                <Select size='medium' placeholder="Select">
                  <Option value="Corporate">Corporate</Option>
                  <Option value="Small Business">Small Business</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Company Name" name="companyName" className="registration-field" rules={[{ required: true }]}>
                <Input type='text' placeholder='Enter' />
              </Form.Item>

              {countries &&
                <Form.Item label="Place of Business" name="headquater" className="registration-field" rules={[{ required: true }]} >
                  <Select showSearch placeholder="Select" virtual={false} onChange={handleCountries}>
                    {countries.map((option, i) =>
                      <Option key={i} value={`${option.name} ${option.code}`}>
                        {option.name}
                      </Option>
                    )}
                  </Select>
                </Form.Item>
              }

              <Form.Item label="Address1" name="address1" className="registration-field" rules={[{ required: true, }]}>
                <Input type='text' placeholder="Enter" />
              </Form.Item>

              <Form.Item label="Address2" name="address2" className="registration-field">
                <Input type='text' placeholder="Enter" />
              </Form.Item>

              <Form.Item label="Zip Code" name="zipCode" className="registration-field" rules={[{ required: true }]}>
                <Input placeholder="Enter" />
              </Form.Item>

              {states &&
                <Form.Item label="State/Province" name="state" className="registration-field" rules={[{ required: true }]}>
                  <Select showSearch placeholder="Select" virtual={false} onChange={handleStates}>
                    {states.map((option, i) =>
                      <Option key={i} value={`${option.name} ${option.iso}`}>{option.name}</Option>
                    )}
                  </Select>
                </Form.Item>
              }
              {cities &&
                <Form.Item label="City" name="city" className="registration-field" rules={[{ required: true }]}>
                  <Select showSearch placeholder="Select" virtual={false}>
                    {cities.map((option, i) => <Option key={i} value={`${option}`}>{option}</Option>
                    )}
                  </Select>
                </Form.Item>
              }
              {countries &&
                <Form.Item label="Countries of Operation" name="countriesOfOperation" className="registration-field" rules={[{ required: true }]}>
                  <Select showSearch mode='multiple' virtual={false} placeholder="Select" >
                    {countries.map((option, i) => <Option key={i} value={`${option.name}`}>{option.name}</Option>
                    )}
                  </Select>
                </Form.Item>
              }

              <Form.Item label="TIN" name="TIN" className="registration-field" rules={[{ required: true }]} >
                <Input placeholder="Enter" />
              </Form.Item>

              <Form.Item label="DNS Number" name="DNSNumber" className="registration-field" rules={[{ required: true }]} >
                <Input placeholder="Enter" />
              </Form.Item>

              <Form.Item label="Website/URL" name="websiteUrl" className="registration-field" >
                <Input type='text' placeholder="Enter" />
              </Form.Item>

              <Form.Item label="Product Categories" name="categories" className="registration-field" rules={[{ required: true }]} >
                <div className='selector-container' ref={selectorRef}>
                  <Input
                    allowClear
                    placeholder="Search"
                    prefix={<AiOutlineSearch />}
                    onChange={(e) => handleInputChange(e.target.value)}
                  />
                  {input && optionsVisible && (
                    <div className='selector-options'>
                      {categories && categories.items.map((option) => (
                        <div
                          className='options'
                          key={option._id}
                          onClick={() => handleCategoryClick(option._id)}
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Form.Item>

              <Form.Item label="Social Media" className="registration-field" name="socialmedia" rules={[{ required: true }]}>
                <Select
                  mode='multiple'
                  placeholder="Select"
                  suffixIcon={<PiPlusBold />}
                  onChange={handleChangeSocialMeida}
                  open={shouldOptionsVisible}
                  onDropdownVisibleChange={handleDropdownVisibleChange}
                >
                  {SocialMediaArray &&
                    SocialMediaArray.map((options, i) => {
                      const IconComponent = options.icon
                      return (
                        <Option value={`${options.name}`} key={i}>
                          <div className="flex-social-options">
                            <IconComponent style={{ fill: `${options.fill}`, fontSize: `${options.size}` }} className='icon' />
                            <div className='option'>{options.name}</div>
                          </div>
                        </Option>
                      )
                    })}
                </Select>
              </Form.Item>
              {selectedOption &&
                selectedOption.map((option, i) => {
                  return (
                    <Space size={[0, 8]} wrap key={i}>
                      <Tag closable onClose={() => handleTagClose(option)}>{option}</Tag>
                    </Space>
                  )
                })}
              <div className={selectedOption?.length > 0 ? "custom-social-options" : ""}>
                {selectedOption && selectedOption.map((option, i) => {
                  const IconComponent = SocialMediaObj[option]?.icon;
                  return (
                    <Form.Item name={`${option.toLowerCase()}`} key={i}>
                      <div className="flex-social-options">
                        {IconComponent &&
                          <IconComponent
                            style={{
                              fill: `${SocialMediaObj[option]?.fill}`,
                              fontSize: `${SocialMediaObj[option]?.size}`
                            }}
                            className='icon'
                          />
                        }
                        <Input className='option' placeholder={`https://${SocialMediaObj[option]?.name.toLowerCase()}.com`} />
                      </div>
                    </Form.Item>
                  )
                })}
              </div>

              <Form.Item label="Username" name="username" className="registration-field"
                rules={[
                  { required: true, message: 'Please enter an email' },
                  {
                    type: 'text',
                  },
                  {
                    validator: customEmailValidator2,
                  },
                ]}
                validateFirst
              >
                <Input type='text' placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Password" name="password" className="registration-field"
                rules={[
                  { required: true, },
                  { min: 8, message: 'Password must contain at least 8 characters with at last' },
                  { pattern: /[A-Z]/, message: '1 uppercase letter' },
                  { pattern: /[a-z]/, message: '1 lowercase letter' },
                  { pattern: /[#?!@$%^&*-]/, message: '1 special letter' },
                  { pattern: /[0-9]/, message: '1 numeric letter' },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item label="Confirm Password" name="confirmPassword" className="registration-field" dependencies={['password']}
                rules={[{ required: true },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The confirm password that you entered do not match!'));
                  },
                }),
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item label="Contact Name" name="contactName" className="registration-field" rules={[{ required: true }]} >
                <Input placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Designation" name="designation" className="registration-field" rules={[{ required: true }]} >
                <Input placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Work" name="work"  >
                <PhoneInput inputProps={{ placeholder: '' }} />
              </Form.Item>

              <Form.Item label="Mobile" name="phone" className="registration-field"
                rules={[
                  { required: true, },
                  { type: 'text', },
                  { validator: customEmailValidator3 },
                ]}
                validateFirst
              >
                <PhoneInput size="medium" inputProps={{ placeholder: '' }} />
              </Form.Item>

              <Form.Item label="Fax" name="fax" className="registration-field"
                rules={[
                  {
                    pattern: /^\d{3}-\d{3}-\d{4}$/,
                    message: 'Please enter a valid fax number in the format XXX-XXX-XXXX.',
                  },
                ]}>
                <Input placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Email" name="email" className="registration-field" rules={[{ required: true, type: 'email' }]}>
                <Input placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Alternate Email" name="alternatemail" className="registration-field" rules={[{ type: 'email' }]}>
                <Input placeholder='Enter' />
              </Form.Item>

              <Form.Item label="Recommended/Referred by" className="registration-field" name="recommendBy" rules={[{ type: 'text' }]} >
                <Input placeholder='Enter' />
              </Form.Item>

              <div className='security-questions registration-field cursor' onClick={handleSecurityQuestions}>
                <div className="add">Add</div>
                <div className="questions-button">Security Questions*</div>
              </div>

              <SecurityQuestionsModal
                questionsModal={questionsModal}
                setQuestionsArray={setQuestionsArray}
                setQuestionsModal={setQuestionsModal}
              />
              <div className='bottom-buttons'>
                <Button size='medium' type="primary" className='primary-buttton' onClick={handleClear} >
                  Clear
                </Button>
                <Button size='medium' type="primary" loading={isLoading} className='secondary-buttton' htmlType="submit" >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Form >
      </div >
      <ConfirmationModal
        width="400px"
        titleSize="14px"
        primaryButton="OK"
        handleSuccess={handleOK}
        shouldModalOpen={shouldModalOpen}
        icon={<BsCheckLg className='icon' />}
        heading="Thank You for registering with Koboldo"
        paragraph={
          <div>
            Your request is currently being reviewed by Koboldo.
            <br />
            We will get back to you shortly
          </div>
        }
      />
      <ConfirmationModal
        width="360px"
        primaryButton="Yes"
        secondaryButton="No"
        handleSuccess={handleModalClear}
        handleReject={handleModelClose}
        shouldModalOpen={openClearModal}
        title="Are you sure you want to clear the form"
        icon={<TbAlertTriangle style={{ fontSize: "50px", color: "#f7c607" }} />}
      />
    </>
  )
}

export default SignUp
