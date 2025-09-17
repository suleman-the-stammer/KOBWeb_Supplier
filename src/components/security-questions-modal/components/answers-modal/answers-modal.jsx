import React, { useState } from 'react'

// ANT-D :
import { Button, Form, Input, Modal } from 'antd'

// Components :
import { PageHeading } from 'src/components'

// Redux :
import { useDispatch, useSelector } from 'react-redux';

// CSS :
import './answers-modal.scss'
import SecurityServices from 'src/services/security.question.services';
import { useNavigate } from 'react-router-dom';


const validateMessages = {
  required: '${label} is required!',
};

const AnswersModal = ({ openModal, setAnswerModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.signIn);
  const { isLoading } = useSelector((state) => state.security);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleCancelModal = () => { setAnswerModal(false); }
  const hanldeAnswerModal = (value) => {
    console.log("--------->>>", value)
    SecurityServices.CheckAnswer(value, dispatch, navigate);
    setAnswerModal(false);
  }
  // console.log("----------", user, "======>", isLoading);
  const handleNext = () => {
    console.log("-------", isLastQuestion)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % user.questions.length);
  }
  const isLastQuestion = user?.questions && currentIndex === user?.questions.length - 1;

  return (

    <Modal
      centered
      title={false}
      footer={false}
      open={openModal}
      closeIcon={false}
      maskClosable={false}
    >
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={hanldeAnswerModal}
        validateMessages={validateMessages}
        className='questioning-form'
      >
        <PageHeading title="Verified" upperTitle="Get" />
        {user && user ?
          <div className='flex-answering-fields'>
            <div className="answer-descripition">
              <div className="answer-heading">Hmmm... Don't recognize this device</div>
              Seems like you are using a New device to log into Koboldo
              For your security, please answer the question(s) below to help verify & register this New device
              Let's start by confirming your identity first
            </div>
            <div className='question-field'>Question:  {user && user?.questions?.[currentIndex]?.question}</div>
            <Form.Item label="Answer" name="answer" rules={[{ required: true, }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <div className='next-button'>
              <a onClick={handleNext}>Try another question</a>
            </div>
          </div> :
          <div className='no-data'>There is no security answer</div>
        }
        <div className='bottom-buttons'>
          <Button key="cancel" type="primary" onClick={handleCancelModal}>
            Cancel
          </Button>
          <Button key="continue" type="primary" loading={isLoading} htmlType="submit" >
            Save
          </Button>
        </div>
      </Form >
    </Modal >
  )
}

export default AnswersModal
