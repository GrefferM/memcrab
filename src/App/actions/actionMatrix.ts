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
    ACTION_X_FAILURE
} from '@/actionTypes/typeMatrix'

export const actionM = (value: number) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_M_START })

    try {
        dispatch({
            type: ACTION_M_SUCCESS,
            payload: value,
        })
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
        dispatch({
            type: ACTION_N_SUCCESS,
            payload: value,
        })
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
        dispatch({
            type: ACTION_X_SUCCESS,
            payload: value,
        })
    } catch (error) {
        dispatch({
            type: ACTION_X_FAILURE,
            error
        })
    }
}