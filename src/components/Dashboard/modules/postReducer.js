
import * as ActionType from "./constants";

const initPostReducer = {
    postList: [],
    isLoading: false,
}

export const postReducer = (state = initPostReducer, action) => {
    switch (action.type) {
        case ActionType.REQUEST_API_POSTS: {

            state.isLoading = true;
            state.postList = null;
            return { ...state }
        }
        case ActionType.SUCCESS_API_POSTS: {

            state.isLoading = false;
            state.postList = action.payload;
            return { ...state }
        }
        default: return { ...state }
    }
}
