import {
    ACTION_GRID_MATRIX_SUCCESS,
    iGridMatrixAction,
} from '@/actionTypes/typeMatrix'

const initialState = {
    grid: undefined
}

type Action = iGridMatrixAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_GRID_MATRIX_SUCCESS:
            return {
                ...state,
                grid: action.payload
            }
        default:
            return state
    }
}