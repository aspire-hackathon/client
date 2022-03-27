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
        default:
            return state;
    }
}