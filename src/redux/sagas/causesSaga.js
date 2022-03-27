import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/causes';

function getCausesApi() {
    return axios.get(process.env.REACT_APP_API_URL+'/causes')
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* fetchCauses() {
    try{
        const causes = yield call(getCausesApi);
        yield put({ type: types.GET_CAUSES_SUCCESS, causes: causes});
    } catch (e) {
        yield put({ type: types.GET_CAUSES_FAIL, message: e.message })
    }
}

export function* causesSaga() {
    yield takeEvery(types.GET_CAUSES, fetchCauses);
}
