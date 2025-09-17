import React, { useState, useEffect } from 'react'

// ANT-D :
import { Form, Input, Modal, Button, Select } from 'antd';

// Components : 
import { PageHeading } from 'src/components';

// Redux :
import { useSelector } from 'react-redux';

// CSS 
import './questions-modal.scss'

const { Option } = Select;


const validateMessages = {
    required: '${label} is required!',
};

const QuestionsModal = (props) => {
    const [form] = Form.useForm();
    const { questions } = useSelector((state) => state.security);
    const { openModal, setQuestionsModal, setQuestionsArray } = props;

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        const filteredOptions = questions?.filter(option => !selectedOptions.includes(option._id));
        setFilteredOptions(filteredOptions);
    }, [questions, selectedOptions]);


    const handleCancelModal = () => setQuestionsModal(false);

    const handleSelectChange = (value, index) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[index] = value;
        setSelectedOptions(updatedSelectedOptions);
    }
    const hanldeQuestionsModal = (values) => {
        setQuestionsModal(false);
        setQuestionsArray(Object.values(values.questions));
    }
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
                onFinish={hanldeQuestionsModal}
                validateMessages={validateMessages}
                className='questioning-form'
            >
                <PageHeading title="Questions" upperTitle="Security" />
                {questions && questions.length > 1 ?
                    <div className="flex-questioning-modal">
                        {questions &&
                            <Form.List name="questions">
                                {() => (
                                    questions.slice(0, 5).map((question, index) => (
                                        <div key={index}>
                                            <Form.Item
                                                label={`Question ${index + 1}`}
                                                name={[index, "questionId"]}
                                                rules={[{ required: true }]}
                                                className="security-questions-field"
                                            >
                                                <Select
                                                    virtual={false}
                                                    placeholder="Select"
                                                    onChange={(value) => handleSelectChange(value, index)}
                                                >
                                                    {filteredOptions.map((option, i) =>
                                                        <Option key={i} value={option._id}>
                                                            {option.question}
                                                        </Option>
                                                    )}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                label={`Answer ${index + 1}`}
                                                name={[index, "answer"]}
                                                rules={[{ required: true }]}
                                                className="security-answers-field"
                                            >
                                                <Input placeholder='Enter' />
                                            </Form.Item>
                                        </div>
                                    ))
                                )
                                }
                            </Form.List>
                        }
                    </div> :
                    <div className='no-data'>There is no security question</div>
                }
                <div className='bottom-buttons'>
                    <Button key="cancel" type="primary" onClick={handleCancelModal}>
                        Cancel
                    </Button>
                    <Button key="continue" type="primary" htmlType="submit" >
                        Save
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default QuestionsModal
