import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    ADD_SUCCESS,
    DELETE_SUCCESS,
    UPDATE_SUCCESS,
    READY_TO_BUY,
} from "../Constants";

const initState = READY_TO_BUY;
export const report = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            state = ADD_SUCCESS;
            return state;
        case UPDATE_PRODUCT:
            state = UPDATE_SUCCESS;
            return state;
        case DELETE_PRODUCT:
            state = DELETE_SUCCESS;
            return state;
        default:
            return state;
    }
};
