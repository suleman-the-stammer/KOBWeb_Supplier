import React, { useState } from 'react'
import { MdOutlineError } from 'react-icons/md';

// Components :
import { CustomModal, MobileInput } from 'src/components';
import { ConfirmationModal } from 'src/components/common';

// Helper :
import OtpInput from 'react-otp-input';

// CSS :
import './forgot-username.scss'


const ForgotUsername = () => {
    const [otp, setOtp] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shouldModalOpen, setShouldModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOTP = (value) => {
        setOtp(value);
        if (value.length == 6) {
            setShouldModalOpen(false);
            setOtp('');
            setShowErrorModal(true);
        }
    }
    const handleOk = () => {
        setIsModalOpen(false);
        setShouldModalOpen(true);
    }
    const handleCancelModal = () => {
        setIsModalOpen(false);
        setShouldModalOpen(false);
    }
    const handleErrorModal = () => { setShowErrorModal(false); }

    return (
        <>
            <span className="cursor" onClick={showModal}>Forgot Login/Username</span>
            <CustomModal
                handleOk={handleOk}
                title="Forgot Username"
                isModalOpen={isModalOpen}
                handleCancelModal={handleCancelModal}
                subHeading="Enter Mobile Number"
                MobileInput={<MobileInput />}
            />
            <CustomModal
                footer="Resend OTP"
                title="Verification Required"
                isModalOpen={shouldModalOpen}
                handleCancelModal={handleCancelModal}
                subHeading="Sent to your number +92 3045064423"
                sendOTP="Enter OTP"
                OtpInput={
                    <OtpInput
                        value={otp}
                        onChange={handleOTP}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                    />}
            />
            <ConfirmationModal
                width="300px"
                primaryButton="OK"
                handleSuccess={handleErrorModal}
                shouldModalOpen={showErrorModal}
                // title={error?.data}
                title="No username found"
                icon={<MdOutlineError style={{ fontSize: "50px", color: "red" }} />}
            />
        </>
    )
}

export default ForgotUsername
