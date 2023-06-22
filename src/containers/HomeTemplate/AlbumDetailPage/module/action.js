import * as ActionType from "./constant";
import api from "../../../../api/index";


export const fetchAlbumDetailAPi = (id) => {
    return dispatch => {
        dispatch(requestApi())
        api
            .get(`albums/${id}/`)
            .then(result => {
                dispatch(successAPi(result.data, ActionType.SUCCESS_API_ITEM_ALBUMs))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const fetchPhotosDetailAPi = (id) => {
    return dispatch => {
        dispatch(requestApi())
        api
            .get(`photos/${id}/`)
            .then(result => {

                dispatch(successAPi(result.data, ActionType.SUCCESS_API_ITEM_PHOTOs))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const fetchPostsDetailAPi = (id) => {
    return dispatch => {
        dispatch(requestApi())
        api
            .get(`posts/${id}/`)
            .then(result => {
                dispatch(successAPi(result.data, ActionType.SUCCESS_API_ITEM_POSTs))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const requestApi = () => {
    return { type: ActionType.REQUEST_API_ITEM }
};
const successAPi = (data, type) => {
    return {
        type: type,
        payload: data
    }
}