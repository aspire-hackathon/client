import { all } from 'redux-saga/effects';
import {getUserByIdSaga,getUserByUnameSaga,registerUserSaga} from './userSaga';

export default function* rootSaga() {
    yield all([
        registerUserSaga(),
        getUserByIdSaga(),
        getUserByUnameSaga(),
    ])
}