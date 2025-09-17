import React, { useState } from 'react'

// ANT-D :
import { Button, Modal } from 'antd'

// CSS :
import './terms-conditions-modal.scss'


const TermsConditionsModal = (props) => {
    const { open, handleDecline, handleAccept } = props;
    const [shouldDisabled, setShouldDisabled] = useState(false);


    const onChange = (e) => { setShouldDisabled(e.target.checked); }
    const ModalTitle = () => {
        return (<div className='modal-title'>Terms & Conditions</div>);
    };
    const ModalFooter = () => {
        return (
            <div className='modal-footer-buttons'>
                <Button key="cancel" type="primary" onClick={handleDecline}>Decline</Button>
                <Button key="continue" type="primary" disabled={!shouldDisabled} onClick={handleAccept}>Accept</Button>
            </div>
        );
    };

    return (
        <Modal
            centered
            width="900px"
            title={<ModalTitle />}
            footer={<ModalFooter />}
            open={open}
            onCancel={handleDecline}
            className="terms-modal-container"
        >
            <div className="flex-terms-conditions-modal">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="agreed"><input type='checkbox' onChange={onChange} />I agree to Koboldo's terms and conditions</div>
            </div>
        </Modal>
    )
}

export default TermsConditionsModal
