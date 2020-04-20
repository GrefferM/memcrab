import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import {
    getGridMatrix,
    getMatrix
} from '@/selectors'

import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state),
    matrix: getMatrix(state)
})
const mapDispatch = {}

const connector = connect(
    mapState,
    mapDispatch
)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
// Interface indicates
// what parameters are in the component
interface iProps {
    children?: React.ReactNode
}
const infoRow = (grid: iGridMatrix[], step: number) => {
    const sum: number[] = []
    if (grid) {
        let tmp = 0
        for (let i = 0, j = 1; i < Object.values(grid).length; i++) {
            if (i > j * step) {
                sum.push(tmp)
                tmp = 0
                j++
            }
            tmp += grid[i].ranNumber
        }
        sum.push(tmp)
    }
    return sum
}
const infoCol = (grid: iGridMatrix[], step: number) => {
    const sum: number[] = new Array(10).fill(0)
    if (grid) {
        for (let i = 0, j = 1; i < Object.values(grid).length; i++, j++) {
            if (j === step) {
                j = 0
            }
            sum[j] += grid[i].ranNumber
        }
    }
    return sum
}
const Col = (count: number, index: number, grid: number[]) => {
    try {
        const type = new Set<JSX.Element>()
        for (let j = 0; j < count; j++) {
            type.add(<td key={j} className={classes.col}>{grid[index]}</td>)
            index++
        }
        return type
    } catch (error) { }
}
const Row = (M: number, N: number, grid: number[]) => {
    let index = 0
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N, index, grid)}</tr>)
        index += N
    }

    return type
}
const Info: React.FC<iProps & Props> = (props: iProps & Props) => {
    return (
        <div className={classes.d_flex}>
            <table className={classes.table}>
                <tbody>
                    {Row(props.matrix.M, 1, infoRow(props.gridMatrix, props.matrix.M))}
                </tbody>
            </table>
            <div className={`${classes.d_flex} ${classes.flex_column}`}>
                <div>{props.children}</div>
                <table className={classes.m_auto}>
                    <tbody>
                        {Row(1, props.matrix.N, infoCol(props.gridMatrix, props.matrix.N))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connector(Info)