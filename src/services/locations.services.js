import http from './http.service';
import Promisable from './promisable.service';
import { locationsActions } from 'src/redux/slices/locationsSlice';


const getLocations = {
    countries: async (dispatch) => {
        let URL = `/apis/common/regions/countries`;
        const [success, error] = await Promisable.asPromise(http.get(URL));

        if (success) {
            const successData = success.data.data;
            dispatch(locationsActions.getCountries(successData))
        }
        if (error) {
            console.log("============>", error);
        }
        return [success, error];
    },
    states: async (countryCode, dispatch) => {
        let URL = `/apis/common/regions/states?country=${countryCode}`;
        const [success, error] = await Promisable.asPromise(http.get(URL));

        if (success) {
            const successData = success.data.data;
            dispatch(locationsActions.getStates(successData))
        }
        if (error) {
            console.log("============>", error);
        }
        return [success, error];
    },
    cities: async (locations, dispatch) => {
        let URL = `apis/common/regions/cities?country=${locations.country}&state=${locations.state}`;
        const [success, error] = await Promisable.asPromise(http.get(URL));

        if (success) {
            const successData = success.data.data;
            dispatch(locationsActions.getCities(successData))
        }
        if (error) {
            console.log("============>", error);
        }
        return [success, error];
    },
}
export default getLocations;