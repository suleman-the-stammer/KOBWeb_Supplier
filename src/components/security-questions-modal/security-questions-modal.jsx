import React from 'react';

import { AnswersModal, QuestionsModal } from './components';

import './security-questions-modal.scss';


const SecurityQuestionsModal = (props) => {
    const {
        questionsModal,
        answersModal,
        setAnswerModal,
        setQuestionsArray,
        setQuestionsModal,
    } = props;

    return (
        <>
            <QuestionsModal
                openModal={questionsModal}
                setQuestionsArray={setQuestionsArray}
                setQuestionsModal={setQuestionsModal}
            />
            <AnswersModal
                openModal={answersModal}
                setAnswerModal={setAnswerModal}
            />

        </>
    );
}

export default SecurityQuestionsModal;
