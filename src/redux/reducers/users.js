import * as type from '../types/users';

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUSer:[]
};

export default function users(state = initialState, action) {
    switch(action.type) {
        // case type.GET_USERS_REQUESTED:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case type.GET_USERS_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         users: action.users,
        //     }
        // case type.GET_USERS_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.message,
        //     }
        case type.REGISTER_USER:
            return {
                ...state,
                loading: true
            }
        case type.REGISTER_USER_SUCCESS:
            console.log('succ')
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case type.REGISTER_USER_FAILURE:
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