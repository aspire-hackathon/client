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
    isUserAuthenticated: false,
    userDetail: undefined
};

export default function users(state = initialState, action) {
    switch(action.type) {
        case type.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case type.REGISTER_USER_SUCCESS:
            console.log("reg",action)
            return {
                ...state,
                loading: false,
                status: {
                    code:action.users.status.code,
                    statusText:action.users.status.statusText
                }
            }
        case type.REGISTER_USER_FAILURE:
            console.log('fail',action)
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        case type.GET_USER_BYID:
            return {
                ...state,
                loading: true
            }
        case type.GET_USER_BYID_SUCCESS:
            console.log('succ')
            return {
                ...state,
                loading: false,
                requestedUser: action.user,
            }
        case type.GET_USER_BYID_FAILURE:
            console.log('fail',action)
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case type.USER_LOGIN_SUCCESS:
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