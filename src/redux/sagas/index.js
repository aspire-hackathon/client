import { all } from 'redux-saga/effects';
import {getUserByIdSaga,getUserByUnameSaga,registerUserSaga} from './userSaga';
import {causesSaga} from './causesSaga';

import userLoginSaga from './userLoginSaga';

export default function* rootSaga() {
    yield all([
        registerUserSaga(),
        getUserByIdSaga(),
        getUserByUnameSaga(),
        userLoginSaga(),
        causesSaga()
    ])
}