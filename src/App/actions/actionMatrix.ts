import { Dispatch } from 'redux'

import {
    ACTION_M_START,
    ACTION_M_SUCCESS,
    ACTION_M_FAILURE,

    ACTION_N_START,
    ACTION_N_SUCCESS,
    ACTION_N_FAILURE,

    ACTION_X_START,
    ACTION_X_SUCCESS,
    ACTION_X_FAILURE,

    ACTION_INIT_M_START,
    ACTION_INIT_M_SUCCESS,
    ACTION_INIT_M_FAILURE,

    ACTION_INIT_N_START,
    ACTION_INIT_N_SUCCESS,
    ACTION_INIT_N_FAILURE,

    ACTION_INIT_X_START,
    ACTION_INIT_X_SUCCESS,
    ACTION_INIT_X_FAILURE,

    ACTION_GRID_MATRIX_START,
    ACTION_GRID_MATRIX_SUCCESS,
    ACTION_GRID_MATRIX_FAILURE,

    ACTION_INIT_GRID_MATRIX_START,
    ACTION_INIT_GRID_MATRIX_SUCCESS,
    ACTION_INIT_GRID_MATRIX_FAILURE,

    ACTION_GRID_MATRIX_COL_UP_START,
    ACTION_GRID_MATRIX_COL_UP_SUCCESS,
    ACTION_GRID_MATRIX_COL_UP_FAILURE,

    ACTION_MATRIX_COL_ACTION_START,
    ACTION_MATRIX_COL_ACTION_SUCCESS,
    ACTION_MATRIX_COL_ACTION_FAILURE
} from '@/actionTypes/typeMatrix'
import { iGridMatrix } from '@/interfaces/iMatrix'

export const actionM = (value: number) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_M_START })

    try {
        if (value > 0) {
            localStorage.setItem('M', value.toString())
            dispatch({
                type: ACTION_M_SUCCESS,
                payload: value,
            })
        } else {
            dispatch({
                type: ACTION_M_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_M_FAILURE,
            error
        })
    }
}

export const actionN = (value: number) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_N_START })

    try {
        if (value > 0) {
            localStorage.setItem('N', value.toString())
            dispatch({
                type: ACTION_N_SUCCESS,
                payload: value,
            })
        } else {
            dispatch({
                type: ACTION_N_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_N_FAILURE,
            error
        })
    }
}
export const actionX = (value: number) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_X_START })

    try {
        if (value > 0) {
            localStorage.setItem('X', value.toString())
            dispatch({
                type: ACTION_X_SUCCESS,
                payload: value,
            })
        } else {
            dispatch({
                type: ACTION_X_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_X_FAILURE,
            error
        })
    }
}

export const actionInitM = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_M_START })
    const M = localStorage.getItem('M')

    try {
        if (M !== null && +M > 0) {
            dispatch({
                type: ACTION_INIT_M_SUCCESS,
                payload: +M,
            })
        } else {
            dispatch({
                type: ACTION_INIT_M_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_INIT_M_FAILURE,
            error
        })
    }
}
export const actionInitN = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_N_START })
    const N = localStorage.getItem('N')

    try {
        if (N !== null && +N > 0) {
            dispatch({
                type: ACTION_INIT_N_SUCCESS,
                payload: +N,
            })
        } else {
            dispatch({
                type: ACTION_INIT_N_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_INIT_N_FAILURE,
            error
        })
    }
}
export const actionInitX = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_X_START })
    const X = localStorage.getItem('X')

    try {
        if (X !== null && +X > 0) {
            dispatch({
                type: ACTION_INIT_X_SUCCESS,
                payload: +X,
            })
        } else {
            dispatch({
                type: ACTION_INIT_X_FAILURE,
                error: 'The number is less than 0',
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_INIT_X_FAILURE,
            error
        })
    }
}

export const actionGridMatrix = (value: iGridMatrix[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GRID_MATRIX_START })

    try {
        localStorage.setItem('GridMatrix', JSON.stringify(value))
        dispatch({
            type: ACTION_GRID_MATRIX_SUCCESS,
            payload: value,
        })
    } catch (error) {
        dispatch({
            type: ACTION_GRID_MATRIX_FAILURE,
            error
        })
    }
}
export const actionInitGridMatrix = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_GRID_MATRIX_START })
    const grid = localStorage.getItem('GridMatrix')

    try {
        if (grid !== undefined && grid !== null) {
            dispatch({
                type: ACTION_INIT_GRID_MATRIX_SUCCESS,
                payload: JSON.parse(grid),
            })
        }
    } catch (error) {
        dispatch({
            type: ACTION_INIT_GRID_MATRIX_FAILURE,
            error
        })
    }
}

export const actionGridMatrixColUp = (value: iGridMatrix[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_GRID_MATRIX_COL_UP_START })

    try {
        localStorage.setItem('GridMatrix', JSON.stringify(value))
        dispatch({
            type: ACTION_GRID_MATRIX_COL_UP_SUCCESS,
            payload: value,
        })
    } catch (error) {
        dispatch({
            type: ACTION_GRID_MATRIX_COL_UP_FAILURE,
            error
        })
    }
}

export const actionMatrixColAction = (value: number) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MATRIX_COL_ACTION_START })

    try {
        dispatch({
            type: ACTION_MATRIX_COL_ACTION_SUCCESS,
            payload: value,
        })
    } catch (error) {
        dispatch({
            type: ACTION_MATRIX_COL_ACTION_FAILURE,
            error
        })
    }
}