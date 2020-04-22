import {
    ACTION_MATRIX_COL_ACTION_SUCCESS,
    iMatrixColAction
} from '@/actionTypes/typeMatrix'

const initialState = null

export default (state = initialState, action: iMatrixColAction) => {
    switch (action.type) {
        case ACTION_MATRIX_COL_ACTION_SUCCESS:
            return action.payload
        default:
            return state
    }
}