import http from './http.service';
import Promisable from './promisable.service';
import { categoriesActions } from 'src/redux/slices/categoriesSlice';


const getCategories = {
    
    categories: async (value, dispatch) => {
        let URL = `/apis/admin/products/categories/nodes?offset=0&asOptions=true&search=${value}`;
        const [success, error] = await Promisable.asPromise(http.get(URL));

        if (success) {
            const successData = success.data.data;
            dispatch(categoriesActions.fetchSuccess(successData));
        }
        if (error) {
            dispatch(categoriesActions.fetchError(error));
        }
        return [success, error];
    },
}
export default getCategories;