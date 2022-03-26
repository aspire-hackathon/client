import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/causes';

function getApi() {
    return fetch(process.env.REACT_APP_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'appliction/json',
        }
    }).then(res => res.json())
    .catch((error) => {throw error})
}

function* fetchCauses(action) {
    try{
        const causes = yield call(getApi);
        yield put({ type: types.GET_CAUSES_SUCCESS, causes: causes});
    } catch (e) {
        yield put({ type: types.GET_CAUSES_FAIL, message: e.message })
    }
}

function* causesSaga() {
    yield takeEvery(types.GET_CAUSES_REQUESTED, fetchCauses);
}

export default causesSaga;