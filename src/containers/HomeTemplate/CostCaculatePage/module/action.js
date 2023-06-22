import * as ActionType from "../../../../reducers/constant"
import api from "../../../../api"

export const fetchProductApi = ()=>{
    return dispatch => {
        dispatch(requestAPi())

    }
}
const requestAPi =()=>{
    return {
        type: ActionType.REQUEST_API_PRODUCTS
    }
}