import {select, call, put, takeLatest } from 'redux-saga/effects';

import ACTIONS from '../constants/actions';
import dbActions from '../actions/dbActions';

function* getEnvoyStructure() {
    const structure = yield call(dbActions.getEnvoyStructure);
    yield put({type: ACTIONS.GET_ENVOY_STRUCTURE_SUCCESS, payload: {structure}});
}

function* addEnvoy(action) {
    const status = yield call(dbActions.addEnvoy, action.payload.envoy);
    yield put({type: ACTIONS.ADD_ENVOY_SUCCESS, payload: {status}});
}

function* getMeps(action) {
    const meps = yield call(dbActions.getMeps);
    yield put({type: ACTIONS.GET_MEPS_SUCCESS, payload: {meps}});
}

function* updateEnvoy(action) {
    const status = yield call(dbActions.updateEnvoy, action.payload.envoy);
    yield put({type: ACTIONS.UPDATE_ENVOY_SUCCESS, payload: {status}});
}

function* getEnvoy(action) {
    const envoy = yield call(dbActions.getEnvoy, action.payload.id);
    yield put({type: ACTIONS.GET_ENVOY_SUCCESS, payload: {envoy}});
}

function* sejmikSaga() {
    yield takeLatest(ACTIONS.GET_ENVOY_STRUCTURE, getEnvoyStructure);
    yield takeLatest(ACTIONS.ADD_ENVOY, addEnvoy);
    yield takeLatest(ACTIONS.GET_MEPS, getMeps);
    yield takeLatest(ACTIONS.UPDATE_ENVOY, updateEnvoy);
    yield takeLatest(ACTIONS.GET_ENVOY, getEnvoy);
}

export default sejmikSaga;