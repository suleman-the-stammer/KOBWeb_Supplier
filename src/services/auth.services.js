import http from './http.service';
import Promisable from './promisable.service';
import { signInActions } from 'src/redux/slices/auth/signinSlice';
import { registerActions } from 'src/redux/slices/auth/registerSlice';


const AuthService = {

    login: async (data, dispatch, navigate) => {
        dispatch(signInActions.fetchStart());
        let URL = `/apis/auth/signIn/supplier`;
        const [success, error] = await Promisable.asPromise(http.post(URL, data));

        if (success) {
            const successData = success.data.data;
            dispatch(signInActions.fetchSuccess(successData));
        }

        if (error) {
            let errorMessage = error.response.data;
            dispatch(signInActions.fetchError(errorMessage));
        }

        return [success, error];
    },

    register: async (dispatch, data, navigate) => {
        dispatch(registerActions.fetchStart());
        let URL = `/apis/auth/request/supplier`;
        const [success, error] = await Promisable.asPromise(http.post(URL, data));

        if (success) {
            const successData = success.data.message;
            dispatch(registerActions.fetchSuccess(successData));
        }

        if (error) {
            let errorMessage = error.response.data;
            dispatch(registerActions.fetchError(errorMessage));
        }

        return [success, error];
    },

    logout: (navigate) => {
        localStorage.clear();
        navigate('/login');
    },
};

export default AuthService;