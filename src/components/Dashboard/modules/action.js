
import * as ActionType from "./constants";
import api from "../../../api/index";
import * as ActionReducer from "../../../reducers/constant";

export const fetchPostApi = () => {
    return dispatch => {
        dispatch(requestPostApi());
        api
            .get(`posts/`)
            .then((result) => {

                dispatch(successPostApi(result.data));
            })
            .catch(err => {
                console.log(`there are some error - ${err}`);
            })
    }
}
export const fetchAlbumsApi = () => {
    return dispatch => {
        dispatch(requestAlbumApi());
        api
            .get(`albums/`)
            .then((result) => {
                // console.log(`typeof - ${typeof (result.data)}`);
                dispatch(successAlbumsApi(result.data))

            })
            .catch(err => {
                console.log(`album fetch fail ${err}`);
            })
    }


}
export const fetchPhotosApi = () => {
    return dispatch => {
        dispatch(requestPhotosApi());
        api
            .get(`photos/`)
            .then((result) => {
                // console.log(`NHQT`);
                dispatch(successPhotosApi(result.data))
            })
            .catch(err => {
                console.log(`there are err ${err}`);
            })

    }
}
const requestPhotosApi = () => {
    return {
        type: ActionReducer.REQUEST_API_PHOTOS,
    }
};
const successPhotosApi = (data) => {
    return {
        type: ActionReducer.SUCCESS_API_PHOTOS,
        payload: data
    }
}
const requestAlbumApi = () => {
    return {
        type: ActionReducer.REQUEST_API_ALBUMS,
    }
}
const successAlbumsApi = (data) => {

    return {
        type: ActionReducer.SUCCESS_API_ALBUMS,
        payload: data
    }
}
const requestPostApi = () => {
    return {
        type: ActionType.REQUEST_API_POSTS
    }
}
const successPostApi = (data) => {

    return {
        type: ActionType.SUCCESS_API_POSTS,
        payload: data
    }
}