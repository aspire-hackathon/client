import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/users';
import axios from 'axios';
import users from '../reducers/users';

function registerApi(user) {
    return axios.post(process.env.REACT_APP_API_URL+'/register',user)
    .then(res => res)
    .catch((error) => {throw error})
}

function* registerUser(action) {
    try{
        const user = yield call(registerApi,action.payload);
        yield put({ type: types.REGISTER_USER_SUCCESS, users: {
            status:{
                code:user.status,
                statusText:user.statusText
            },
        }});
    } catch (e) {
        yield put({ type: types.REGISTER_USER_FAILURE,users: {
            status:{
                code:500,
                statusText:"Some Error has occured! Please try again!"
            },
        },  message: e.message })
    }
}

export function* registerUserSaga() {
    yield takeEvery(types.REGISTER_USER, registerUser);
}

function userByIdApi(id){
    console.log('saga',id)
    return axios.get(process.env.REACT_APP_API_URL+`/user/byid/${id}`)
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* getUserbyId(action) {
    try{
        const user = yield call(userByIdApi,action.payload);
        yield put({ type: types.GET_USER_BYID_SUCCESS, user: user});
    } catch (e) {
        yield put({ type: types.GET_USER_BYID_FAILURE, message: e.message })
    }
}

export function* getUserByIdSaga() {
    yield takeEvery(types.GET_USER_BYID, getUserbyId);
}

function userByUnameApi(username){
    console.log('saga',username)
    return axios.get(process.env.REACT_APP_API_URL+`/user/byid/${id}`)
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* getUserbyUname(action) {
    try{
        const user = yield call(userByUnameApi,action.payload);
        yield put({ type: types.GET_USER_BYID_SUCCESS, user: user});
    } catch (e) {
        yield put({ type: types.GET_USER_BYID_FAILURE, message: e.message })
    }
}

export function* getUserByUnameSaga() {
    yield takeEvery(types.GET_USER_BYUN, getUserbyUname);
}

