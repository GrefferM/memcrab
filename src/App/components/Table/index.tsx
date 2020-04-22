import React, { useEffect, MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import {
    actionGridMatrix,
    actionInitGridMatrix,
    actionGridMatrixColUp
} from '@/actions/actionMatrix'
import { getGridMatrix } from '@/selectors'
import { bypass, СreateGrid, drawingGrid } from './drawing'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state)
})

const mapDispatch = {
    actionGridMatrix,
    actionInitGridMatrix,
    actionGridMatrixColUp
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
    const ColUp = (isId: boolean, value: iGridMatrix) => {
        if (isId) {
            ++value.ranNumber
        }
        return value
    }

    const handleCol = (event: MouseEvent) => {
        //@ts-ignore
        const id = parseInt(event?.target.id.replace(/\D/g, ''))
        props.actionGridMatrixColUp(props.gridMatrix.map((value) => ColUp(value.id === id, value)))
        const active: number[] = []
        try {
            bypass(id, props.M, props.N, props.X, active)
            for (let i = 0; i < Object.values(props.gridMatrix).length; i++) {
                props.gridMatrix[i].active = false
            }
            for (let i = 0; i < active.length; i++) {
                props.gridMatrix[active[i] - 1].active = true
            }

            localStorage.setItem('GridMatrix', JSON.stringify(props.gridMatrix))
        } catch (error) { }
    }
    return (
        <table>
            <tbody>
                {props.M && props.N && drawingGrid(props.M, props.N, props.gridMatrix, handleCol)}
            </tbody>
        </table>
    )
}

export default connector(Table)