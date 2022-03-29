
import * as ActionType from "./constant";
import * as TypeUser from "../containers/AuthTemplate/UsersPage/module/constants";

export const initAlbums = {
    isloading: false,
    albumsList: {},
    photosList: {},
    userData: {},
}

export const hookReducers = (state, action) => {

    switch (action.type) {
        case ActionType.REQUEST_API_ALBUMS: {
            state.isloading = true;
            state.albumsList = null;
            return { ...state };
        }

        case ActionType.SUCCESS_API_ALBUMS: {
            // console.log(`check5 ${action.payload}`);
            state.isloading = false;
            state.albumsList = action.payload;
            return { ...state };
        }
        case ActionType.REQUEST_API_PHOTOS: {
            state.isloading = true;
            state.photosList = null;
            return { ...state }
        }
        case ActionType.SUCCESS_API_PHOTOS: {

            state.isloading = false;
            state.photosList = action.payload;
            return { ...state }
        }
        case TypeUser.REQUEST_API_USER: {
            state.isloading = true;
            state.userData = null;
            return { ...state };
        }
        case TypeUser.SUCCESS_API_USER: {
            // console.log(`NHQT - ${action.payload}`);
            state.isloading = false;
            state.userData = action.payload;
            return { ...state };
        }
        default: return { ...state }
    }
}