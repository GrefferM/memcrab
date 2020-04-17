import iRootState from '@/interfaces/iRootState'
import { iMatrix, iGridMatrix } from '@/interfaces/iMatrix'

export const getMatrix = (state: iRootState):iMatrix => state.Matrix
export const getGridMatrix = (state: iRootState):iGridMatrix[] => state.GridMatrix.grid