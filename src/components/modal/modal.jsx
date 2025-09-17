import React from 'react'

// ANT-D :
import { Button, Modal } from 'antd'

// CSS :
import './modal.scss'


const CustomModal = (props) => {
    const {
        title,
        footer,
        sendOTP,
        handleOk,
        OtpInput,
        subHeading,
        MobileInput,
        isModalOpen,
        handleCancelModal
    } = props;

    const ModalTitle = () => {
        return (<div className='modal-title'>{title}</div>);
    };
    const ModalFooter = () => {
        return (
            <div className='modal-footer-buttons'>
                {footer ? <><a>{footer}</a></> :
                    <>
                        <Button key="cancel" type="primary" onClick={handleCancelModal}>Cancel</Button>
                        <Button key="continue" type="primary" onClick={handleOk}>Continue</Button>
                    </>
                }
            </div>
        );
    };
    return (
        <Modal
            centered
            open={isModalOpen}
            maskClosable={false}
            title={<ModalTitle />}
            footer={<ModalFooter />}
            onCancel={handleCancelModal}
        >
            <div className="modal-content">
                {subHeading && <div className="modal-sub-heading">{subHeading}</div>}
                {sendOTP && <div className="send-otp">{sendOTP}</div>}
                {MobileInput && <div className="custom-mobile-input">{MobileInput}</div>}
                {OtpInput && <div className="custom-Otp-iput">{OtpInput}</div>}
            </div>
        </Modal>
    )
}

export default CustomModal
