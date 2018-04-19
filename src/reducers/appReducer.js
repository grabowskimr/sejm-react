import ACTIONS from '../constants/actions';

const appReducer = (state = {
    envoyStructure: [],
    showNotify: false,
    notifyText: '',
    meps: [],
    loadNewData: false,
    envoy: {}
}, action) => {
    switch(action.type) {
        case ACTIONS.GET_ENVOY_STRUCTURE_SUCCESS:
            return {
                ...state,
                envoyStructure: action.payload.structure
            }
        case ACTIONS.ADD_ENVOY:
            return {
                ...state,
                showNotify: false,
                notifyText: '',
                loadNewData: false
            }
        case ACTIONS.DISPLAY_NOFITY:
        case ACTIONS.ADD_ENVOY_SUCCESS:
        case ACTIONS.UPDATE_ENVOY_SUCCESS: {
            return {
                ...state,
                showNotify: true,
                notifyText: action.payload.status,
                loadNewData: true
            }
        }
        case ACTIONS.HIDE_NOFITY:
        case ACTIONS.UPDATE_ENVOY: {
            return {
                ...state,
                showNotify: false,
                notifyText: ''
            }
        }
        case ACTIONS.GET_MEPS_SUCCESS: {
            return {
                ...state,
                meps: action.payload.meps,
                loadNewData: false
            }
        }
        case ACTIONS.GET_ENVOY_SUCCESS: {
            return {
                ...state,
                envoy: action.payload.envoy
            }
        }
        default:
            return state;
    }
}


export default appReducer;