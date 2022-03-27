import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/users';
import axios from 'axios';

function registerApi(user) {
    return axios.post(process.env.REACT_APP_API_URL+'/register',user)
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* registerUser(action) {
    try{
        const users = yield call(registerApi,action.payload);
        yield put({ type: types.REGISTER_USER_SUCCESS, users: users});
    } catch (e) {
        yield put({ type: types.REGISTER_USER_FAILURE, message: e.message })
    }
}

function* userSaga() {
    // yield takeEvery(types.GET_USERS_REQUESTED, fetchUsers);
    yield takeEvery(types.REGISTER_USER, registerUser);
}

export default userSaga;