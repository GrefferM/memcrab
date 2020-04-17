import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import classes from './index.module.scss'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import {
    actionGridMatrix
} from '@/actions/actionMatrix'
import { getGridMatrix } from '@/selectors'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state)
})

const mapDispatch = {
    actionGridMatrix
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
const randomNamber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const Col = (count: number, index: number, grid: iGridMatrix[]) => {
    let number
    let gridTmp

    const type = new Set<JSX.Element>()
    for (let j = 0; j < count; j++) {
        number = randomNamber(100, 1000)
        type.add(<td key={j} className={classes.col}>{number}</td>)

        gridTmp = { id: index, ranNumber: number }
        grid.push(gridTmp)

        index++
    }
    return type
}
const Row = (M: number, N: number, setGridState: Function, setTypeState: Function) => {
    let index = 1
    const grid: iGridMatrix[] = []
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N, index, grid)}</tr>)
        index += N
    }
    setGridState(grid)
    setTypeState(type)
}
const Table: React.FC<iProps & Props> = (props: iProps & Props) => {
    const [gridState, setGridState] = useState<iGridMatrix[]>()
    const [typeState, setTypeState] = useState()

    const isGrid = () => {
        if (gridState === undefined) {
            Row(props.M, props.N, setGridState, setTypeState)
        }
        if (typeState !== undefined) {
            return typeState
        }
        return <></>
    }
    useEffect(() => {
        if (gridState !== undefined) {
            props.actionGridMatrix(gridState)
        }
    }, [gridState])

    return (
        <table className={classes.table}>
            <tbody>
                {props.M && props.N && isGrid()}
            </tbody>
        </table>
    )
}

export default connector(Table)