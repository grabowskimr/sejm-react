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

export function getMeps() {
    return {
        type: ACTIONS.GET_MEPS
    }
}

export function getEnvoy(id) {
    return {
        type: ACTIONS.GET_ENVOY,
        payload: {id}
    }
}

export function updateEnvoy(envoy) {
    return {
        type: ACTIONS.UPDATE_ENVOY,
        payload: {envoy}
    }
}