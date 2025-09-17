import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { TbAlertTriangle } from 'react-icons/tb';


// ANT-D :
import { Input, Form, Switch, DatePicker, Select } from 'antd'

// Components :
import { AmountInput } from '..';
import { ConfirmationModal, DownArrowSolid, UpArrowSolid } from 'src/components/common';

// CSS :
import './supplier-sites.scss'


const siterray = [
    { label: "Site 1", value: "Site 1" },
    { label: "Site 1", value: "Site 2" },
    { label: "Site 1", value: "Site 3" },
]
const paymentArray = [
    { label: "Payment Terms 1", value: "payment-1" },
    { label: "Payment Terms 2", value: "payment-2" },
    { label: "Payment Terms 3", value: "payment-3" },
]
const freightArray = [
    { label: "Freight Terms 1", value: "freight-1" },
    { label: "Freight Terms 2", value: "freight-2" },
    { label: "Freight Terms 3", value: "freight-3" },
]
const fobArray = [
    { label: "FOB Terms 1", value: "fob-1" },
    { label: "FOB Terms 2", value: "fob-2" },
    { label: "FOB Terms 3", value: "fob-3" },
]

const SupplierSites = (props) => {
    const {
        count,
        index,
        // isClosed,
        fieldStatus,
        setFieldStatus,
        switchPrices,
        dynamicSites,
        setSwitchPrices,
        setDynamicSites,
    } = props;

    const [toggleTerms, setToggleTerms] = useState(false);
    const [toggleSite, setToggleSite] = useState(true);
    const [isPricingTypeOn, setIsPricingTypeOn] = useState(false);
    const [isSwitchOff, setIsSwitchOff] = useState(false);
    const [quotePrice, setQuotePrice] = useState(null);
    const [shippingPrice, setShippingPrice] = useState(null);
    const [handlingPrice, setHandlingPrice] = useState(null);
    const [siteTotalAmount, setSiteTotalAmount] = useState(null);
    const [siteSubTotalAmount, setSiteSubTotalAmount] = useState(null);


    useEffect(() => {
        const newAmount = quotePrice + shippingPrice + handlingPrice;
        setSiteSubTotalAmount(newAmount);
        setSiteTotalAmount(siteSubTotalAmount);
    }, [quotePrice, shippingPrice, handlingPrice]);


    const dateFormat = "DD MMMM, YYYY";
    const customFormat = (value) => `${value.format(dateFormat)}`;

    const onChangeFromDate = (date, dateString) => {
        // if (date) {
        //     const formattedDate = customFormat(moment(dateString, dateFormat, true));
        //     setDatePickerVal(formattedDate);
        // }
        setFieldStatus({
            ...fieldStatus,
            toDate: false
        });
    };
    const onChangeToDate = (date, dateString) => {
        if (date) {
            const formattedDate = customFormat(moment(dateString, dateFormat, true));
            setDatePickerVal(formattedDate);
        }
    };

    const handleCollapesTerms = () => setToggleTerms(!toggleTerms);
    const handleCollapesSite = () => setToggleSite(!toggleSite);

    const handleSwitchChange = (checked) => {
        setIsPricingTypeOn(checked)
        if (!checked) {
            setIsSwitchOff(true);
        }
        if (switchPrices) {
            setIsPricingTypeOn(true);
        }
    }

    const handleRemoveFun = (index) => {
        const updatedSites = [...dynamicSites];
        updatedSites.splice(index, 1);
        setDynamicSites(updatedSites);
    }

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        const newValue = parseFloat(e.target.value) || 0;

        inputValue = inputValue.replace(/[^\d]/g, '');

        inputValue = inputValue.replace(/^0+/, '');

        if (/^\d*$/.test(inputValue)) {
            const lastTwoDigits = inputValue.slice(-2);
            const otherDigits = inputValue.slice(0, -2);

            if (otherDigits.length > 0) {
                inputValue = otherDigits + '.' + lastTwoDigits;
            } else {
                inputValue = '0.' + lastTwoDigits;
            }
            switch (e.target.id) {
                case 'price-field1':
                    setQuotePrice(newValue);
                    break;
                case 'price-field2':
                    setShippingPrice(newValue);
                    break;
                case 'price-field3':
                    setHandlingPrice(newValue);
                    break;
            }
        }
        console.log("------------>", inputValue)
    };

    const handleModalProceed = () => {
        setIsPricingTypeOn(false);
        setSwitchPrices(true);
        if (switchPrices) {
            setSwitchPrices(false);
        }
    }

    const handleModelCancel = () => {
        setIsPricingTypeOn(false);
    }

    return (
        <div className="sites-container">
            <div className="sites-section">
                <div className="site-no">
                    <div className="site">
                        <div className="number">#{count}</div>
                        <div className="heading">Supplier Site <span>*</span></div>
                    </div>
                    <div className='flex-remove'>
                        {count > 1 &&
                            <div className="remove cursor" onClick={() => handleRemoveFun(index)}>Remove</div>
                        }
                        <div className="collaps-icons" onClick={handleCollapesSite}>
                            {toggleSite ?
                                <UpArrowSolid marginRight="2px" /> :
                                <DownArrowSolid marginRight="2px" />
                            }
                        </div>
                    </div>
                </div>
                <Form.Item className="flex-fields" name="siteName">
                    <Select
                        disabled={fieldStatus.siteName}
                        placeholder="Select Supplier Site"
                        suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
                    >
                        {siterray.map((option, index) => (
                            <Option key={index} value={option.value}>{option.label}</Option>
                        ))}
                    </Select>
                </Form.Item>
            </div>
            {toggleSite &&
                <div className="terms-section">
                    <div className="flex-terms">
                        <div className="terms">
                            <div className="divier" />
                            <div className="heading">Terms</div>
                            <div className="divier" />
                        </div>
                        <div className="icons" onClick={handleCollapesTerms}>
                            {toggleTerms ?
                                <IoIosArrowUp className="cursor"
                                    style={{
                                        marginTop: "6px",
                                        fontSize: "16px",
                                        color: "#c0c8d2"
                                    }}
                                /> :
                                <FaAngleDown className="icon cursor " />
                            }
                        </div>
                    </div>
                    {toggleTerms &&
                        <div className="terms-fields">
                            <Form.Item label="Payment Terms" className="flex-fields" name="payment">
                                <Select
                                    placeholder="Select"
                                    suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
                                >
                                    {paymentArray.map((option, index) => (
                                        <Option key={index} value={option.value}>{option.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item label="Freight Terms" className="flex-fields" name="freight">
                                <Select
                                    placeholder="Select"
                                    suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
                                >
                                    {freightArray.map((option, index) => (
                                        <Option key={index} value={option.value}>{option.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item label="FOB" className="flex-fields" name="fob">
                                <Select
                                    placeholder="Select"
                                    suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
                                >
                                    {freightArray.map((option, index) => (
                                        <Option key={index} value={option.value}>{option.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    }
                </div>
            }
            {toggleSite &&
                <div className="effective-dates-section">
                    <div className="effective-date">
                        <div className="divier" />
                        <div className="date">Effective Dates</div>
                        <div className="divier" />
                    </div>
                    <div className="flex-delivery">
                        <div className="need-by">
                            <div className="heading">From</div>
                            <DatePicker disabled={fieldStatus.fromDate} onChange={onChangeFromDate} format={customFormat} placeholder="Select" />
                        </div>
                        <div className="promise">
                            <div className="heading">To</div>
                            <DatePicker disabled={fieldStatus.toDate} onChange={onChangeToDate} format={customFormat} placeholder="Select" />
                        </div>
                    </div>
                </div>
            }
            {toggleSite &&
                <div className="pricing-border">
                    <div className="pricing-type">
                        <div className="title">Pricing Type</div>
                        <Switch
                            size="medium"
                            checked={switchPrices}
                            disabled={index !== 0}
                            onChange={handleSwitchChange}
                            className={index !== 0 ? 'disabled-switch' : ''}
                        />
                    </div>

                </div>
            }
            {toggleSite && switchPrices &&
                <>
                    <div className="prices-type">
                        <div className="flex-prices">
                            <div className="range-price">Range Price</div>
                            <div className="block-price">Block Price</div>
                        </div>
                    </div>
                    <div className="quantity-per-split">
                        <div className="split-quantity">Quantity Per Split</div>
                        <Input className='quantity-field' type='number' />
                    </div>
                </>
            }
            {toggleSite &&
                <div className="flex-align">
                    <div className="divier" />
                    <div className="date">Quote</div>
                    <div className="divier" />
                </div>
            }
            {toggleSite &&
                <div className="quantity-quote-section">
                    {/* <div className="flex-headings">
                        <div className="title">Quantity</div>
                        <div className="title">Quote</div>
                    </div> */}
                    {!switchPrices &&
                        <>
                            <div className="flex-line">
                                <div className="quantity-section">
                                    <Form.Item label="Quantity" className="flex-fields" name="fob">
                                        <Input className="quantity" placeholder="Enter" type="number" defaultValue={60} />
                                    </Form.Item>
                                </div>
                                <div className="quote-section">
                                    <Form.Item label="Quote" required={[{ required: true }]} className="flex-fields" name="fob">
                                        <AmountInput id='price-field1' placeholder="Enter" value={quotePrice} handleInputChange={handleInputChange} />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="flex-shipping">
                                <div className="quantity-section shipping">Shipping</div>
                                <div className="quote-section shipping-field">
                                    <AmountInput id='price-field2' placeholder="Enter" value={shippingPrice} handleInputChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="flex-handling">
                                <div className="quantity-section shipping">Handling</div>
                                <div className="quote-section shipping-field">
                                    <AmountInput id='price-field3' placeholder="Enter" value={handlingPrice} handleInputChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="flex-subtotal bg-color">
                                <div className="quantity-section shipping">Sub Total</div>
                                <div className="quote-section shipping-field">
                                    <AmountInput disable={true} placeholder="Enter" readOnly={true} value={siteSubTotalAmount} />
                                </div>
                            </div>
                        </>
                    }
                    {switchPrices &&
                        <>
                            <div className="pricing-fields-section">
                                <div className="flex-pricing-fields">
                                    <div className="flex-headings">
                                        <div className="title from">From</div>
                                        <div className="title to">To</div>
                                    </div>
                                    <div className="pricing-fields">
                                        {/* <RxCross1 className='icon cursor' /> */}
                                        <Input placeholder='0' style={{ textAlign: "center" }} />
                                        <Input placeholder='0' style={{ textAlign: "center" }} />
                                    </div>
                                </div>
                                <div className="quote-field">
                                    <AmountInput placeholder="Enter" price1={shippingPrice} handleInputChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="flex-shipping">
                                <div className="quantity-section shipping">Shipping</div>
                                <div className="quote-section shipping-field">
                                    <AmountInput id='price-field2' placeholder="Enter" value={shippingPrice} handleInputChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="flex-handling" style={{ border: "none" }}>
                                <div className="quantity-section shipping">Handling</div>
                                <div className="quote-section shipping-field">
                                    <AmountInput id='price-field3' placeholder="Enter" value={handlingPrice} handleInputChange={handleInputChange} />
                                </div>
                            </div>
                        </>
                    }

                </div>
            }
            <ConfirmationModal
                width="360px"
                primaryButton="Proceed"
                secondaryButton="Cancel"
                handleSuccess={handleModalProceed}
                handleReject={handleModelCancel}
                shouldModalOpen={isPricingTypeOn}
                title="This action will clear all data you entered"
                icon={<TbAlertTriangle style={{ fontSize: "50px", color: "#f7c607" }} />}
            />
        </div>
    )
}

export default SupplierSites
