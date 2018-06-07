import ACTIONS from '../constants/actions';

export function getEnvoyStructure() {
    return {
        type: ACTIONS.GET_ENVOY_STRUCTURE
    }
}

export function addEnvoy(envoy) {
    return {
        type: ACTIONS.ADD_ENVOY,
        payload: {envoy}
    }
}

export function displayNotify(status) {
    return {
        type: ACTIONS.DISPLAY_NOFITY,
        payload: {status}
    }
}

export function hideNotify() {
    return {
        type: ACTIONS.HIDE_NOFITY
    }
}

export function getMeps(name, surname, party, constituency, page, step) {
    return {
        type: ACTIONS.GET_MEPS,
        payload: {name, surname, party, constituency, page, step}
    }
}

export function getEnvoy(id) {
    return {
        type: ACTIONS.GET_ENVOY,
        payload: {id}
    }
}

export function removeEnvoy(id) {
    return {
        type: ACTIONS.REMOVE_ENVOY,
        payload: {id}
    }
}

export function updateEnvoy(envoy) {
    return {
        type: ACTIONS.UPDATE_ENVOY,
        payload: {envoy}
    }
}

export function getParty() {
    return {
        type: ACTIONS.GET_PARTY
    }
}

export function addCriterion(criterion) {
    return {
        type: ACTIONS.ADD_CRITERION,
        payload: {criterion}
    }
}

export function removeCriterion(criterion) {
    return {
        type: ACTIONS.REMOVE_CRITERION,
        payload: {criterion}
    }
}

export function stepForward(page) {
    return {
        type: ACTIONS.STEP_FORWARD,
        payload: {page}
    }
}

export function stepBack(page) {
    return {
        type: ACTIONS.STEP_BACK,
        payload: {page}
    }
}

export function search() {
    return {
        type: ACTIONS.SEARCH
    }
}

export function getCountries() {
    return {
        type: ACTIONS.GET_COUNTRIES
    }
}