import React, { useState } from 'react'
import { MdOutlineError } from 'react-icons/md'

// Components :
import { CustomModal } from 'src/components'
import { ConfirmationModal } from 'src/components/common'

// Helpers :
import OTPInput from 'react-otp-input'

import './forgot-password.scss'


const ForgotPassword = ({ isButtonDisabled }) => {
    const [emailOtp, setEmailOtp] = useState('');
    const [numberOtp, setNumberOtp] = useState('');

    const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
    const [showNumberOtpModal, setShowNumberOtpModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);


    const handleForgotPassword = () => {
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
        <div>
            <div className="flex-forgot-password">
                <div className="flex-keep-me">
                    <input type="checkbox" />
                    <span>Keep me signed in (Uncheck if using a public device)</span>
                </div>
                <div
                    style={{
                        pointerEvents: isButtonDisabled ? 'auto' : 'none',
                        color: isButtonDisabled ? '#254FE2' : 'grey'
                    }}
                    className="forgot-password cursor"
                    onClick={handleForgotPassword}
                >
                    Forgot Password
                </div>
            </div>
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
                title="No password found"
                icon={<MdOutlineError style={{ fontSize: "50px", color: "red" }} />}
            />
        </div>
    )
}

export default ForgotPassword
