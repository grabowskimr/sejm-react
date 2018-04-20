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
    const meps = yield call(dbActions.getMeps, action.payload);
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

function* getParty(action) {
    const parties = yield call(dbActions.getParty);
    yield put({type: ACTIONS.GET_PARTY_SUCCESS, payload: {parties}});
}

function* addCriterion(action) {
    const status = yield call(dbActions.addCriterion, action.payload.criterion);
    yield put({type: ACTIONS.ADD_CRITERION_SUCCESS, payload: {status}});
}

function* removeCriterion(action) {
    const data = yield call(dbActions.removeCriterion, action.payload.criterion);
    yield put({type: ACTIONS.REMOVE_CRITERION_SUCCESS, payload: {data}});
}

function* stepForward(action) {
    const state = yield select();
    const meps = yield call(dbActions.stepForward, state.appReducer);
    yield put({type: ACTIONS.STEP_FORWARD_SUCCESS, payload: {meps}});
}

function* stepBack(action) {
    const state = yield select();
    const meps = yield call(dbActions.stepBack, state.appReducer);
    yield put({type: ACTIONS.STEP_BACK_SUCCESS, payload: {meps}});
}

function* removeEnvoy(action) {
    const status = yield call(dbActions.removeEnvoy, action.payload.id);
    yield put({type: ACTIONS.REMOVE_ENVOY_SUCCESS, payload: {status}});
}


function* sejmikSaga() {
    yield takeLatest(ACTIONS.GET_ENVOY_STRUCTURE, getEnvoyStructure);
    yield takeLatest(ACTIONS.ADD_ENVOY, addEnvoy);
    yield takeLatest(ACTIONS.GET_MEPS, getMeps);
    yield takeLatest(ACTIONS.UPDATE_ENVOY, updateEnvoy);
    yield takeLatest(ACTIONS.GET_ENVOY, getEnvoy);
    yield takeLatest(ACTIONS.GET_PARTY, getParty);
    yield takeLatest(ACTIONS.ADD_CRITERION, addCriterion);
    yield takeLatest(ACTIONS.REMOVE_CRITERION, removeCriterion);
    yield takeLatest(ACTIONS.STEP_FORWARD, stepForward);
    yield takeLatest(ACTIONS.STEP_BACK, stepBack);
    yield takeLatest(ACTIONS.REMOVE_ENVOY, removeEnvoy);
}

export default sejmikSaga;