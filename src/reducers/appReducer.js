import ACTIONS from '../constants/actions';

const appReducer = (state = {
    envoyStructure: []
}, action) => {
    switch(action.type) {
        case ACTIONS.GET_ENVOY_STRUCTURE_SUCCESS:
            return {
                ...state,
                envoyStructure: action.payload.structure
            }
        default:
            return state;
    }
}


export default appReducer;