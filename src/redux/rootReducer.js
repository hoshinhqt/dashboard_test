import { combineReducers } from 'redux'
import { postReducer } from "../components/Dashboard/modules/postReducer";
import { hookReducers } from "../reducers/AlbumsReducer";
import { allDetailReducers } from "../containers/HomeTemplate/AlbumDetailPage/module/AllDetailReducer";


export const rootReducer = combineReducers({
    postReducer,
    hookReducers,
    allDetailReducers,
})