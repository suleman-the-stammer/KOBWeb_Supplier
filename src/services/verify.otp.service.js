import http from './http.service';
import Promisable from './promisable.service';
import { signInActions } from 'src/redux/slices/auth/signinSlice';
import { registerActions } from 'src/redux/slices/auth/registerSlice';


const AuthService = {

    verify: async (data, dispatch, navigate) => {
        // dispatch(signInActions.fetchStart());
        let URL = `/apis/auth/answers/verify`;
        const [success, error] = await Promisable.asPromise(http.post(URL, data));

        if (success) {
            const successData = success.data.data;
            console.log("-------------->",successData)
            // dispatch(signInActions.fetchSuccess(successData));
        }

        if (error) {
            let errorMessage = error.message;
            // dispatch(signInActions.fetchError(errorMessage));
        }

        return [success, error];
    },
};

export default AuthService;