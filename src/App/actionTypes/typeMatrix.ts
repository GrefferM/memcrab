import { iGridMatrix } from '@/interfaces/iMatrix'

export const ACTION_M_START   = 'ACTION_M_START'
export const ACTION_M_SUCCESS = 'ACTION_M_SUCCESS'
export const ACTION_M_FAILURE = 'ACTION_M_FAILURE'

export const ACTION_N_START   = 'ACTION_N_START'
export const ACTION_N_SUCCESS = 'ACTION_N_SUCCESS'
export const ACTION_N_FAILURE = 'ACTION_N_FAILURE'

export const ACTION_X_START   = 'ACTION_X_START'
export const ACTION_X_SUCCESS = 'ACTION_X_SUCCESS'
export const ACTION_X_FAILURE = 'ACTION_X_FAILURE'

export const ACTION_INIT_M_START   = 'ACTION_INIT_M_START'
export const ACTION_INIT_M_SUCCESS = 'ACTION_INIT_M_SUCCESS'
export const ACTION_INIT_M_FAILURE = 'ACTION_INIT_M_FAILURE'

export const ACTION_INIT_N_START   = 'ACTION_INIT_N_START'
export const ACTION_INIT_N_SUCCESS = 'ACTION_INIT_N_SUCCESS'
export const ACTION_INIT_N_FAILURE = 'ACTION_INIT_N_FAILURE'

export const ACTION_INIT_X_START   = 'ACTION_INIT_X_START'
export const ACTION_INIT_X_SUCCESS = 'ACTION_INIT_X_SUCCESS'
export const ACTION_INIT_X_FAILURE = 'ACTION_INIT_X_FAILURE'

export const ACTION_GRID_MATRIX_START   = 'ACTION_GRID_MATRIX_START'
export const ACTION_GRID_MATRIX_SUCCESS = 'ACTION_GRID_MATRIX_SUCCESS'
export const ACTION_GRID_MATRIX_FAILURE = 'ACTION_GRID_MATRIX_FAILURE'

export interface iMAction {
    type: typeof ACTION_M_SUCCESS
    payload: number
}

export interface iNAction {
    type: typeof ACTION_N_SUCCESS
    payload: number
}

export interface iXAction {
    type: typeof ACTION_X_SUCCESS
    payload: number
}

export interface iInitMAction {
    type: typeof ACTION_M_SUCCESS
    payload: number
}

export interface iInitNAction {
    type: typeof ACTION_N_SUCCESS
    payload: number
}

export interface iInitXAction {
    type: typeof ACTION_X_SUCCESS
    payload: number
}

export interface iGridMatrixAction {
    type: typeof ACTION_GRID_MATRIX_SUCCESS
    payload: iGridMatrix
}