import { iMatrix, iGridMatrix } from './iMatrix'

export default interface iRootState {
    Matrix: iMatrix
    GridMatrix: {
        grid: iGridMatrix[]
    },
    ActionCol: number
}