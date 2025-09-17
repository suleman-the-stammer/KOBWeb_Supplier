import React, { useState } from 'react'
import { MdOutlineError } from 'react-icons/md';

// ANT-D :
import { Button } from 'antd'

// Components :
import { CustomModal } from 'src/components';
import { ConfirmationModal } from 'src/components/common';

// Helpers :
import OTPInput from 'react-otp-input';

// CSS :
import './login-control-buttons.scss'


const LoginControlButtons = (props) => {
    const { isLoading, isButtonDisabled } = props;

    const [emailOtp, setEmailOtp] = useState('');
    const [numberOtp, setNumberOtp] = useState('');

    const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
    const [showNumberOtpModal, setShowNumberOtpModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleOtpRequest = () => {
        setShowEmailOtpModal(true);
    }
    const handleCancelModal = () => {
        setShowEmailOtpModal(false);
        setShowNumberOtpModal(false);
    }
    const handleEmailOTP = (value) => {
        setEmailOtp(value);
        if (value.length == 6) {
            setEmailOtp('')
            setShowEmailOtpModal(false);
            setShowNumberOtpModal(true);
        }
    }
    const handleNumberOTP = (value) => {
        setNumberOtp(value);
        if (value.length == 6) {
            setNumberOtp('');
            setShowNumberOtpModal(false);
            setShowConfirmationModal(true);
        }
    }
    const handleConfirmationModal = () => {
        setShowConfirmationModal(false);
    }
    return (
        <div className="login-control-buttons">
            <Button type="primary" disabled={!isButtonDisabled} loading={isLoading} htmlType="submit" className="primary-button">
                Sign in
            </Button>
            <div className="or">or</div>
            <Button type="default" disabled={!isButtonDisabled} onClick={handleOtpRequest} className="secondary-button">Request OTP</Button>
            <CustomModal
                footer="Resend OTP"
                title="Verification Required"
                isModalOpen={showEmailOtpModal}
                handleCancelModal={handleCancelModal}
                subHeading="Sent to your number +92 3******423"
                sendOTP="Enter OTP"
                OtpInput={
                    <OTPInput
                        value={emailOtp}
                        numInputs={6}
                        onChange={handleEmailOTP}
                        renderInput={(props) => <input {...props} />}
                    // renderInput={(props) => <input {...props} className={`${error && "error-field"}`}/>}
                    />}
            />
            <CustomModal
                footer="Resend OTP"
                title="Verification Required"
                isModalOpen={showNumberOtpModal}
                handleCancelModal={handleCancelModal}
                subHeading="Sent to your email osama*****@gmail.com"
                sendOTP="Enter OTP"
                OtpInput={
                    <OTPInput
                        value={numberOtp}
                        numInputs={6}
                        onChange={handleNumberOTP}
                        renderInput={(props) => <input {...props} />}
                    // renderInput={(props) => <input {...props} className={`${error && "error-field"}`}/>}
                    />}
            />
            <ConfirmationModal
                width="300px"
                primaryButton="OK"
                handleSuccess={handleConfirmationModal}
                shouldModalOpen={showConfirmationModal}
                // title={error?.data}
                title="Can't login"
                icon={<MdOutlineError style={{ fontSize: "50px", color: "red" }} />}
            />
        </div>
    )
}

export default LoginControlButtons
