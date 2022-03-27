import * as type from '../types/users';

export function registerUser(user) {
    return {
        type: type.REGISTER_USER,
        payload: user,
    }
}

export function login(user, navigate) {
    return {
        type: type.USER_LOGIN,
        payload: {user, navigate},
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
        payload: id,
    }
}

export function getUserByUsername(username) {
    return {
        type: type.GET_USER_BYUN,
        payload: username,
    }
}

