import {
    ACTION_M_SUCCESS,
    iMAction,

    ACTION_N_SUCCESS,
    iNAction,

    ACTION_X_SUCCESS,
    iXAction,

    ACTION_INIT_M_SUCCESS,
    iInitMAction,

    ACTION_INIT_N_SUCCESS,
    iInitNAction,

    ACTION_INIT_X_SUCCESS,
    iInitXAction,
} from '@/actionTypes/typeMatrix'

const initialState = {
    M: 0,
    N: 0,
    X: 0
}

type Action = iMAction & iNAction & iXAction & iInitMAction & iInitNAction & iInitXAction
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
        case ACTION_INIT_M_SUCCESS:
            return {
                ...state,
                M: action.payload
            }
        case ACTION_INIT_N_SUCCESS:
            return {
                ...state,
                N: action.payload
            }
        case ACTION_INIT_X_SUCCESS:
            return {
                ...state,
                X: action.payload
            }
        default:
            return state
    }
}