import {
    ACTION_GRID_MATRIX_SUCCESS,
    iGridMatrixAction,

    ACTION_INIT_GRID_MATRIX_SUCCESS,
    iInitGridMatrixAction,
} from '@/actionTypes/typeMatrix'

const initialState = {
    grid: undefined
}

type Action = iGridMatrixAction & iInitGridMatrixAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_GRID_MATRIX_SUCCESS:
            return {
                ...state,
                grid: action.payload
            }
        case ACTION_INIT_GRID_MATRIX_SUCCESS:
            return {
                ...state,
                grid: action.payload
            }
        default:
            return state
    }
}