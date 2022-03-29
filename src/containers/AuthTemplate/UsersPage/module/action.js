
import * as ActionType from "./constants";
import api from "../../../../api/index";


export const fetchUserAPi = (id) => {
    return dispatch => {
        dispatch(requestApi())
        api
            .get(`users/${id}/`)
            .then(result => {
                dispatch(successAPi(result.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const requestApi = () => {
    return { type: ActionType.REQUEST_API_USER }
};
const successAPi = (data) => {
    return {
        type: ActionType.SUCCESS_API_USER,
        payload: data
    }
}