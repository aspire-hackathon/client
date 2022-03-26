import * as type from '../types/users';

export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}