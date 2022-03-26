import * as type from '../types/causes';

const initialState = {
    causes: [],
    loading: false,
    error: null,
};

export default function users(state = initialState, action) {
    switch(action.type) {
        case type.GET_CAUSES_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_CAUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                causes: action.causes,
            }
        case type.GET_CAUSES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}