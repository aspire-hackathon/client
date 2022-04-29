import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/causes';

function getCausesApi() {
    return axios.get(process.env.REACT_APP_API_URL+'/cause')
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

export function* getcausesSaga() {
    yield takeEvery(types.GET_CAUSES, fetchCauses);
}


function getCauseByIdApi(id) {
    return axios.get(process.env.REACT_APP_API_URL+`/cause/byid/${id}`)
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* fetchCauseById(action) {
    try{
        const cause = yield call(getCauseByIdApi,action.payload);
        yield put({ type: types.GET_CAUSE_BYID_SUCCESS, cause: cause});
    } catch (e) {
        yield put({ type: types.GET_CAUSE_BYID_FAIL, message: e.message })
    }
}

export function* getcauseByIdSaga() {
    yield takeEvery(types.GET_CAUSE_BYID, fetchCauseById);
}



function joinCauseApi(payload) {
    return axios.patch(process.env.REACT_APP_API_URL+`/cause/${payload.id}/${payload.volId}`)
    .then(res => res.data)
    .catch((error) => {throw error})
}

function* joinCause(action) {
    try{
        const cause = yield call(joinCauseApi,action.payload);
        yield put({ type: types.UPDATE_VOLUNTEER_SUCCESS, cause: cause});
    } catch (e) {
        yield put({ type: types.UPDATE_VOLUNTEER_FAIL, message: e.message })
    }
}

export function* joinCauseSaga() {
    yield takeEvery(types.UPDATE_VOLUNTEER, joinCause);
}