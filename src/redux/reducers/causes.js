import * as type from '../types/causes';

const initialState = {
    causes: JSON.parse(localStorage.getItem('causes')) || [],
    cause : JSON.parse(localStorage.getItem('cause')) || {},
    loading: false,
    error: null,
};

export default function users(state = initialState, action) {
    switch(action.type) {
        case type.GET_CAUSES:
            return {
                ...state,
                loading: true
            }
        case type.GET_CAUSES_SUCCESS:
            localStorage.setItem('causes',JSON.stringify(action.causes));
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


        case type.GET_CAUSE_BYID:
            return {
                ...state,
                loading: true
            }
        case type.GET_CAUSE_BYID_SUCCESS:
            localStorage.setItem('cause',JSON.stringify(action.cause));
            return {
                ...state,
                loading: false,
                cause: action.cause,
            }
        case type.GET_CAUSE_BYID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.message,
            }


        case type.UPDATE_VOLUNTEER:
            return {
                ...state,
                loading: true
            }
        case type.UPDATE_VOLUNTEER_SUCCESS:
            return {
                ...state,
                loading: false,
                cause: action.cause,
            }
        case type.UPDATE_VOLUNTEER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}