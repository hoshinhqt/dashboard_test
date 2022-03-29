import * as ActionType from "./constant";


const initAlbumsDetail = {
    dataDetail: [],
    isLoading: false,
    postDetail: [],
    photoDetail: [],
}
export const allDetailReducers = (state = initAlbumsDetail, action) => {
    switch (action.type) {
        case ActionType.REQUEST_API_ITEM: {
            state.isLoading = true;
            state.dataDetail = null;
            state.postDetail = null;
            state.photoDetail = null;
            return { ...state }
        }
        case ActionType.SUCCESS_API_ITEM_ALBUMs: {
            // console.log('NHQT-ALbum', action.payload);
            state.isLoading = false;
            state.dataDetail = action.payload;
            return { ...state };
        }
        case ActionType.SUCCESS_API_ITEM_POSTs: {
            // console.log('NHQT-POST', action.payload);
            state.isLoading = false;
            state.postDetail = action.payload;
            return { ...state };
        }
        case ActionType.SUCCESS_API_ITEM_PHOTOs: {
            // console.log('NHQT', action.payload);
            state.isLoading = false;
            state.photoDetail = action.payload;
            return { ...state };
        }
        default: return { ...state }
    }
}

