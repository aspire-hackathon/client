import * as type from '../types/users';

export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}

export function userLogin(loginRequest, navigate) {
    return {
      type: type.USER_LOGIN_REQ,
      payload: {loginRequest, navigate},
    };
  }