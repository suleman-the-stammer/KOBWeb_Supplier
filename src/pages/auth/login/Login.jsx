import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

// ANT-D :
import { Form, Input } from "antd";

// Components :
import { SecurityQuestionsModal } from "src/components";
import { ConfirmationModal } from "src/components/common";
import { ForgotPassword, ForgotUsername, LoginControlButtons } from "./components";

// Redux :
import { useDispatch, useSelector } from "react-redux";

// API :
import AuthService from "src/services/auth.services";

// CSS :
import "./Login.scss";


const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.signIn)

  const [inputValue, setInputValue] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [answerModal, setAnswerModal] = useState(false);

  const hanldeLogin = async (values) => {
    let [success, error] = await AuthService.login(values, dispatch, navigate);

    // if (success?.data?.data?.isApproved === false) { navigate('/edit-register'); }
    if (success?.data?.data?.isNewDevice) { setAnswerModal(true); }
    if (error?.response?.data?.data?.isPhoneVerified === false) { setShowErrorModal(true); }
    // if (error) { setShowErrorModal(true); }
  };

  const handleErrorModal = () => setShowErrorModal(false);

  const handleInputChange = (e) => { setInputValue(e.target.value); }

  const isButtonDisabled = inputValue.length > 3;

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

  return (
    <div className="login-container">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        className="login-form"
        onFinish={hanldeLogin}
        validateMessages={validateMessages}
      >
        <div className="form">
          <div className="heading">Sign in</div>
          <div className="flex-form-fields">
            <Form.Item label="Login/Username" name="email" rules={[{ required: true, }]}>
              <Input autoFocus placeholder="Email" onChange={handleInputChange} />
            </Form.Item>
            <div className="forgot-username"><ForgotUsername /></div>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, },
                // { min: 8, message: 'Password must contain at least 8 characters with at last' },
                // { pattern: /[A-Z]/, message: '1 uppercase letter' },
                // { pattern: /[a-z]/, message: '1 lowercase letter' },
                // { pattern: /[#?!@$%^&*-]/, message: '1 special letter' },
                // { pattern: /[0-9]/, message: '1 numeric letter' },
              ]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <ForgotPassword isButtonDisabled={isButtonDisabled} />
            <LoginControlButtons isLoading={isLoading} isButtonDisabled={isButtonDisabled} />
            <div className="register">New to Koboldo? <Link to="/register">Register</Link></div>
          </div>
        </div>
      </Form>
      <SecurityQuestionsModal answersModal={answerModal} setAnswerModal={setAnswerModal} />
      <ConfirmationModal
        width="300px"
        primaryButton="OK"
        handleSuccess={handleErrorModal}
        shouldModalOpen={showErrorModal}
        title={error?.data}
        icon={<MdOutlineError style={{ fontSize: "50px", color: "red" }} />}
      />
    </div>
  );
};

export default Login;
