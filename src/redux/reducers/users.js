
import * as type from '../types/users';

const initialState = {
    users: [],
    loading: false,
    status:{
        code:0,
        statusText:''
    },
    error: null,
    requestedUser:'',
    isUserAuthenticated: localStorage.getItem('user') ? true :false,
    userDetail: JSON.parse(localStorage.getItem('user')) || {}
};

export default function users(state = initialState, action) {
    switch(action.type) {
        case type.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case type.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: {
                    code:action.users.status.code,
                    statusText:action.users.status.statusText
                }
            }
        case type.REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                status: {
                    code:action.users.status.code,
                    statusText:action.users.status.statusText
                },
                error: action.message,
            }
        case type.GET_USER_BYID:
            return {
                ...state,
                loading: true
            }
        case type.GET_USER_BYID_SUCCESS:
            return {
                ...state,
                loading: false,
                requestedUser: action.user,
            }
        case type.GET_USER_BYID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.USER_LOGIN_SUCCESS:
            localStorage.setItem('user',JSON.stringify(action.userDetail));
            if (
                action &&
                action.isUserAuthenticated
              ) {
                window.location.replace(window.location.protocol + '//' + window.location.host + '/causes');
              } else {
                action.navigate("/login");
              }
            return {
                ...state,
                loading: false,
                userDetail: action.userDetail,
                isUserAuthenticated: action.isUserAuthenticated
            }
        case type.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}