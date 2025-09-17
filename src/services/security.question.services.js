import http from './http.service';
import Promisable from './promisable.service';
import { securityQuestionsAction } from 'src/redux/slices/securityQuestionSlice';


const SecurityServices = {
    getQuestions: async (dispatch) => {
        let URL = `/apis/common/security`;
        const [success, error] = await Promisable.asPromise(http.get(URL));

        if (success) {
            const successData = success.data.data;
            dispatch(securityQuestionsAction.getQuestions(successData))
        }
        if (error) {
            console.log("============>", error);
        }
        return [success, error];
    },
    CheckAnswer: async (value, dispatch, navigate) => {
        dispatch(securityQuestionsAction.fetchStart());
        let URL = `apis/auth/answers/verify`;
        const [success, error] = await Promisable.asPromise(http.post(URL, value));

        if (success) {
            console.log("============>", success);
            const successData = success.data.data;
            navigate('/dashboard');
            dispatch(securityQuestionsAction.fetchSuccess(successData));
        }
        if (error) {
            console.log("============>", error);
            dispatch(securityQuestionsAction.fetchError(error));
        }
        return [success, error];
    },
}
export default SecurityServices