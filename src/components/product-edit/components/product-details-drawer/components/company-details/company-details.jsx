import React from 'react'
import { Form, Input } from 'antd'
import { DownArrowSolid, UpArrowSolid } from 'src/components/common'


const CompanyDetails = (props) => {
    const {
        index,
        data,
        toggleShipTo,
        setToggleShipTo,
        shouldShowFields,
        setShouldShowFields
    } = props;


    const handleShipToFun = (index) => {
        const updatedToggleShipTo = [...toggleShipTo];
        updatedToggleShipTo[index] = !updatedToggleShipTo[index];
        setToggleShipTo(updatedToggleShipTo);
        if (shouldShowFields) setShouldShowFields(false);
    };

    const handleShowHide = () => setShouldShowFields(!shouldShowFields);

    return (
        <div className="company-detail">
            <div className="flex-ship-to">
                <div className="ship-to">Ship-to</div>
                <div className="toggle-icon" onClick={() => handleShipToFun(index)}>
                    {toggleShipTo[index] ?
                        <UpArrowSolid /> :
                        <DownArrowSolid />
                    }
                </div>
            </div>
            <div className="comapny-name">
                <div className="flex-company-name">
                    <div className="button">{data.count}</div>
                    <div className="name">
                        {data.companyName.length > 45
                            ? data.companyName.substring(0, 45) + '...'
                            : data.companyName}
                    </div>
                </div>
                <div className="toggle-icon" onClick={handleShowHide}>
                    {shouldShowFields ?
                        <UpArrowSolid
                            color="#fff"
                            marginRight="-3px"
                        /> :
                        <DownArrowSolid
                            color="#fff"
                            marginRight="-3px"
                        />
                    }
                </div>
            </div>
            <Form.Item label="Site Qty." className="flex-fields" name="payment">
                <Input type="number" defaultValue={60} disabled={true} />
            </Form.Item>
            {shouldShowFields &&
                <div className="toggle-fields">
                    <div className="flex-company-name">
                        <div className='company-site-link cursor'>About</div>
                        <Form.Item label="Company Name" className="flex-fields" name="payment" addonBefore={<div>About</div>}>
                            <Input defaultValue="Shenzhen Xinnanming Electronic Co., Ltd." disabled={true} />
                        </Form.Item>
                    </div>
                    <Form.Item label="Address1" className="flex-fields" name="payment">
                        <Input defaultValue="Address1" disabled={true} />
                    </Form.Item>
                    <Form.Item label="Address2" className="flex-fields" name="payment">
                        <Input defaultValue="Address2" disabled={true} />
                    </Form.Item>
                    <Form.Item label="Zip Code" className="flex-fields" name="payment">
                        <Input type="number" defaultValue="555555" disabled={true} />
                    </Form.Item>
                    <Form.Item label="City" className="flex-fields" name="city">
                        <Input defaultValue="california" disabled={true} />
                    </Form.Item>
                    <Form.Item label="State" className="flex-fields" name="state">
                        <Input defaultValue="california" disabled={true} />
                    </Form.Item>
                    <Form.Item label="Country" className="flex-fields" name="country">
                        <Input defaultValue="USA" disabled={true} />
                    </Form.Item>
                </div>}
        </div>
    )
}

export default CompanyDetails
