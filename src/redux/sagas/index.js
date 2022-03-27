import { all } from 'redux-saga/effects';

import userSaga from './userSaga';
import userLoginSaga from './userLoginSaga';

export default function* rootSaga() {
    yield all([
        userSaga(), userLoginSaga()
    ])
}