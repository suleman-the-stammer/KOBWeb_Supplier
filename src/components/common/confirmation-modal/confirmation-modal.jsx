import React from 'react'

// ANT-D :
import { Button, Modal } from 'antd'

// CSS :
import './confirmation-modal.scss'


const ConfirmationModal = (props) => {
  const {
    icon,
    width,
    title,
    heading,
    paragraph,
    description,
    handleReject,
    primaryButton,
    handleSuccess,
    secondaryButton,
    shouldModalOpen,
  } = props;

  return (
    <Modal
      centered
      width={width}
      title={false}
      footer={false}
      closeIcon={false}
      maskClosable={false}
      open={shouldModalOpen}
      onCancel={handleReject}
      className="confirmation-modal-container"
    >
      <div className="flex-confirmation-modal">
        {icon && <div className="check-icon">{icon}</div>}
        {title && <div className="title">{title}</div>}
        {heading && <div className="heading">{heading}</div>}
        {description && <p className="description">{description}</p>}
        {paragraph && <p className="paragraph">{paragraph}</p>}
        <div className='flex-modal-buttons'>
          {secondaryButton &&
            <Button type='primary' className='primary-button' onClick={handleReject}>
              {secondaryButton}
            </Button>}
          {primaryButton &&
            <Button type='primary' className='primary-button' onClick={handleSuccess}>
              {primaryButton}
            </Button>}
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
