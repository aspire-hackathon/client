import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types/users';

function userLoginApi(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}

function* userLoginAction(action) {
  try {
    const res = yield call(userLoginApi, action.payload.user);
    if (res.msg && res.msg === 'Auth successful') {
      localStorage.setItem(
        'ACCESS_TOKEN',
        `Bearer ${res.token}`
      );
      yield put({
        type: types.USER_LOGIN_SUCCESS,
        userDetail: {id: res.id, username: res.userName},
        isUserAuthenticated: true,
        navigate: action.payload.navigate,
      });
    } else {
      yield put({ type: types.USER_LOGIN_FAILURE, message: 'LOGIN_ERR' });
    }
  } catch (e) {
    yield put({ type: types.USER_LOGIN_FAILURE, message: 'LOGIN_ERR' });
  }
}

function* userLoginSaga() {
  yield takeEvery(types.USER_LOGIN, userLoginAction);
}

export default userLoginSaga;