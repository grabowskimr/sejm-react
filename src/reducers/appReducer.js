import ACTIONS from '../constants/actions';

const appReducer = (state = {
    envoyStructure: [],
    showNotify: false,
    notifyText: '',
    meps: [],
    loadNewData: false,
    envoy: {},
    parties: [],
    searchName: '',
    searchSurname: '',
    searchParty: '',
    searchConsituency: '',
    page: 0,
    step: 50
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
        case ACTIONS.UPDATE_ENVOY_SUCCESS:
        case ACTIONS.ADD_CRITERION_SUCCESS:
        case ACTIONS.REMOVE_ENVOY_SUCCESS: {
            return {
                ...state,
                showNotify: true,
                notifyText: action.payload.status,
                loadNewData: true
            }
        }
        case ACTIONS.HIDE_NOFITY:
        case ACTIONS.UPDATE_ENVOY:
        case ACTIONS.ADD_CRITERION:
        case ACTIONS.REMOVE_CRITERION:
        case ACTIONS.REMOVE_ENVOY: {
            return {
                ...state,
                showNotify: false,
                notifyText: ''
            }
        }
        case ACTIONS.GET_MEPS_SUCCESS:
        case ACTIONS.STEP_BACK_SUCCESS:
        case ACTIONS.STEP_FORWARD_SUCCESS: {
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
        case ACTIONS.GET_PARTY_SUCCESS: {
            return {
                ...state,
                parties: action.payload.parties
            }
        }
        case ACTIONS.GET_MEPS: {
            return {
                ...state,
                searchName: action.payload.name,
                searchSurname: action.payload.surname,
                searchParty: action.payload.party,
                searchConsituency: action.payload.constituency
            }
        }
        case ACTIONS.REMOVE_CRITERION_SUCCESS: {
            return {
                ...state,
                showNotify: true,
                notifyText: action.payload.data.status,
                loadNewData: true,
                envoyStructure: action.payload.data.structure
            }
        }
        case ACTIONS.STEP_FORWARD:
        case ACTIONS.STEP_BACK: {
            return {
                ...state,
                page: action.payload.page
            }
        }
        case ACTIONS.SEARCH: {
            return {
                ...state,
                page: 0
            }
        }
        default:
            return state;
    }
}


export default appReducer;