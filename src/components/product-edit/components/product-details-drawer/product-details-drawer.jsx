import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { TbAlertTriangle } from "react-icons/tb";

import moment from 'moment';

// ANT-D :
import { Button, DatePicker, Drawer, Form, Input, Select, } from "antd";

// Components :
import { ConfirmationModal } from "src/components/common";
import { AmountInput, CompanyDetails, SupplierSites } from "./components";

import CompanyLogo from 'src/assets/images/drawer-logo.png'

// CSS :
import './product-details-drawer.scss'


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

const shipToArray = [
    { count: "01", companyName: "Commercial Distributor & Supply Co, Ltd" },
    // { count: "02", companyName: "Shenzhen Xinnanming Electronic Co., Ltd." },
    // { count: "03", companyName: "Dongguan Guangao Private Electronic Technology Co., Ltd." },
]
const ProductDetailsDrawer = (props) => {
    const {
        open,
        title,
        setOpen,
        subTitle,
        isClosed,
    } = props;

    const [form] = Form.useForm();
    // const [toggleShipTo, setToggleShipTo] = useState(true);

    const [toggleShipTo, setToggleShipTo] = useState(Array(shipToArray.length).fill(true));

    const [dynamicSites, setDynamicSites] = useState(["1"]);
    const [switchPrices, setSwitchPrices] = useState(false);
    const [shouldShowFields, setShouldShowFields] = useState(false);
    const [datePickerVal, setDatePickerVal] = useState("04 June, 2023");
    const [cancelButtonModal, setCancelButtonModal] = useState(false);
    const [fieldStatus, setFieldStatus] = useState({
        payment: false,
        freight: true,
        fob: true,
        promiseDate: true,
        siteName: true,
        fromDate: true,
        toDate: true,
    });

    const drawerTitle = (
        <div className="flex-title">
            <div className="sub-title">{subTitle}</div>
            <div className="title">{title}</div>
        </div>
    );


    const handleDrawer = (values) => {
        console.log("--------------form", values);
    };
    const handleValuesChange = (changedValues) => {
        setFieldStatus({
            ...fieldStatus,
            freight: 'payment' in changedValues ? false : fieldStatus.freight,
            fob: 'freight' in changedValues ? false : fieldStatus.fob,
            promiseDate: 'fob' in changedValues ? false : fieldStatus.promiseDate,
            fromDate: 'siteName' in changedValues ? false : fieldStatus.fromDate,
        });
    };

    const handleCancelButton = () => {
        setCancelButtonModal(true)
    };

    const dateFormat = "DD MMMM, YYYY";
    const customFormat = (value) => `${value.format(dateFormat)}`;

    const onChangeDatePicker = (date, dateString) => {
        if (date) {
            const formattedDate = customFormat(moment(dateString, dateFormat, true));
            setDatePickerVal(formattedDate);
        }
        setFieldStatus({
            ...fieldStatus,
            siteName: false
        });
    };

    const handleModelClose = () => {
        setCancelButtonModal(false)
    }

    const handleModalClear = () => {
        form.resetFields();
        setCancelButtonModal(false)
        setOpen(false);
    }

    const handleNewSite = () => {
        const newSite = dynamicSites.length + 1;
        setDynamicSites([...dynamicSites, newSite]);
    }

    const validateMessages = {
        required: '${label} is required!',
    };
    return (
        <>
            <Drawer width="550px" maskClosable={false} title={drawerTitle} placement="right" open={open}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleDrawer}
                    onValuesChange={handleValuesChange}
                    validateMessages={validateMessages}
                    className="product-details-drawer-form"
                >
                    <div className="drawer-container">
                        <div className="company-heading flex-align">
                            <div className="logo"><img src={CompanyLogo} alt="INTERNET ERROR" /></div>
                            <div className="heading">Guangzhou Chu Fei Ya Trade Co, Ltd.</div>
                        </div>
                        <div className="company-payment-terms">
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
                                    disabled={fieldStatus.freight}
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
                                    disabled={fieldStatus.fob}
                                    suffixIcon={<FaAngleDown style={{ fontSize: "15px" }} />}
                                >
                                    {fobArray.map((option, index) => (
                                        <Option key={index} value={option.value}>{option.label}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                        {shipToArray.map((data, index) => (
                            <div key={index} className="company-details-container">
                                <CompanyDetails
                                    data={data}
                                    index={index}
                                    toggleShipTo={toggleShipTo}
                                    setToggleShipTo={setToggleShipTo}
                                    shouldShowFields={shouldShowFields}
                                    setShouldShowFields={setShouldShowFields}
                                />
                                {toggleShipTo[index] &&
                                    <>
                                        <div className="company-delivery">
                                            <div className="flex-align">
                                                <div className="divier" />
                                                <div className="date">Dates</div>
                                                <div className="divier" />
                                            </div>
                                            <div className="flex-delivery">
                                                <div className="need-by">
                                                    <div className="heading">Need-by</div>
                                                    <div className="flex-dates">
                                                        <div className="date">{datePickerVal}</div>
                                                    </div>
                                                </div>
                                                <div className="promise">
                                                    <Form.Item label="Promise" required={[{ required: true }]} className="flex-fields" name="name">
                                                        <DatePicker disabled={fieldStatus.promiseDate} onChange={onChangeDatePicker} format={customFormat} placeholder="Select" />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        {dynamicSites.map((count, index) => (
                                            <SupplierSites
                                                key={index}
                                                form={form}
                                                index={index}
                                                count={count}
                                                fieldStatus={fieldStatus}
                                                setFieldStatus={setFieldStatus}
                                                dynamicSites={dynamicSites}
                                                switchPrices={switchPrices}
                                                setSwitchPrices={setSwitchPrices}
                                                setDynamicSites={setDynamicSites}
                                            />
                                        ))}
                                        <div className="new-supplier cursor" onClick={handleNewSite}>Add New Supplier Site</div>

                                        {!switchPrices &&
                                            <div className="total-counting">
                                                <div className="heading">Total </div>
                                                <div className="total-field">
                                                    <AmountInput disable={true} id='price-field3' placeholder="Enter" />
                                                </div>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                        ))}
                        <div className="action-buttons">
                            <Button type="primary" className="cancel-button" onClick={handleCancelButton}>
                                Cancel
                            </Button>
                            <Button type="primary" htmlType="submit" className="submit-button">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            </Drawer>
            <ConfirmationModal
                width="360px"
                primaryButton="Yes"
                secondaryButton="No"
                handleSuccess={handleModalClear}
                handleReject={handleModelClose}
                shouldModalOpen={cancelButtonModal}
                title="Are you sure you want to clear the form"
                icon={<TbAlertTriangle style={{ fontSize: "50px", color: "#f7c607" }} />}
            />
        </>
    )
}

export default ProductDetailsDrawer
