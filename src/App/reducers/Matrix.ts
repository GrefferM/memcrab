import {
    ACTION_M_SUCCESS,
    iMAction,

    ACTION_N_SUCCESS,
    iNAction,

    ACTION_X_SUCCESS,
    iXAction
} from '@/actionTypes/typeMatrix'

const initialState = {
    M: {},
    N: {},
    X: {}
}

type Action = iMAction & iNAction & iXAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_M_SUCCESS:
            return {
                ...state,
                M: action.payload
            }
        case ACTION_N_SUCCESS:
            return {
                ...state,
                N: action.payload
            }
        case ACTION_X_SUCCESS:
            return {
                ...state,
                X: action.payload
            }
        default:
            return state
    }
}