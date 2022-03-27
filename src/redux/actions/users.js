import * as type from '../types/users';

// export function getUsers(users) {
//     return {
//         type: type.GET_USERS_REQUESTED,
//         payload: users,
//     }
// }

export function registerUser(user) {
    return {
        type: type.REGISTER_USER,
        payload: user,
    }
}

export function login(user) {
    return {
        type: type.USER_LOGIN,
        payload: user,
    }
}

export function logout() {
    return {
        type: type.USER_LOGOUT,
        payload: user,
    }
}

export function getUserById(id) {
    return {
        type: type.GET_USER_BYID,
        payload: user,
    }
}

export function getUserByUsername(username) {
    return {
        type: type.GET_USER_BYUN,
        payload: user,
    }
}

