import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/users';

function userLoginApi(payload) {
  console.log('payload-------', payload);
  console.log(`${process.env.REACT_APP_API_URL}/login`);
  return axios
    .post(`${process.env.REACT_APP_API_URL}/login`, payload)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}

function* userLoginAction(action) {
  console.log('acccctionuuuuuu-----------', action);
  try {
    const res = yield call(userLoginApi, action.payload.loginRequest);
    console.log('res----', res);
    if (res.success && res.message === SUCCESS) {
      localStorage.setItem(
        ACCESS_TOKEN,
        `${res.responseData.tokenType} ${res.responseData.accessToken}`
      );
      yield put({
        type: types.USER_LOGIN_SUCCESS,
        userDetail: res.responseData.userVo,
        isUserAuthenticated: true,
        navigate: action.payload.navigate,
      });
    } else {
      yield put({ type: types.USER_LOGIN_ERROR, message: 'LOGIN_ERR' });
    }
  } catch (e) {
    yield put({ type: types.USER_LOGIN_ERROR, message: 'LOGIN_ERR' });
  }
}

function* userLoginSaga() {
  yield takeEvery(types.USER_LOGIN_REQ, userLoginAction);
}

export default userLoginSaga;