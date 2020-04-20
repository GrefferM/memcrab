import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import classes from './index.module.scss'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import {
    actionGridMatrix,
    actionInitGridMatrix
} from '@/actions/actionMatrix'
import { getGridMatrix } from '@/selectors'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state)
})

const mapDispatch = {
    actionGridMatrix,
    actionInitGridMatrix
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
// Interface indicates
// what parameters are in the component
interface iProps {
    M: number
    N: number
    X: number
}
const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const СreateGrid = (M: number, N: number) => {
    let index = 1
    const grid: iGridMatrix[] = []
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            grid.push({ id: index++, ranNumber: randomNumber(100, 1000) })
        }
        index += N
    }
    return grid
}
const Col = (count: number, index: number, gridState: iGridMatrix[]) => {
    try {
        const type = new Set<JSX.Element>()
        for (let j = 0; j < count; j++) {
            type.add(<td key={j} className={classes.col}>{gridState[index].ranNumber}</td>)
            index++
        }
        return type
    } catch (error) { }
}
const Row = (M: number, N: number, gridState: iGridMatrix[]) => {
    let index = 0
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N, index, gridState)}</tr>)
        index += N
    }

    return type
}
const Table: React.FC<iProps & Props> = (props: iProps & Props) => {
    // We check if localStorage has a previously saved grid
    useEffect(() => {
        if (props.gridMatrix === undefined) {
            if (localStorage.getItem('GridMatrix')) {
                props.actionInitGridMatrix()
            } else {
                props.actionGridMatrix(СreateGrid(props.M, props.N))
            }
        }

    }, [props.gridMatrix])
    // When changing col, row do a rewrite of the grid
    useEffect(() => {
        if (props.gridMatrix !== undefined) {
            props.actionGridMatrix(СreateGrid(props.M, props.N))
        }
    }, [props.M, props.N])
    return (
        <table>
            <tbody>
                {props.M && props.N && Row(props.M, props.N, props.gridMatrix)}
            </tbody>
        </table>
    )
}

export default connector(Table)