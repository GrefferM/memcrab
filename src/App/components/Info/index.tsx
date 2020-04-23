import React, { useEffect, useState, MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import {
    actionMatrixColAction,
    actionGridMatrix,
    actionM
} from '@/actions/actionMatrix'
import {
    getGridMatrix,
    getMatrix
} from '@/selectors'

import { infoSide, infoHorizont, drawing, infoClose } from './drawing'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state),
    matrix: getMatrix(state)
})
const mapDispatch = {
    actionMatrixColAction,
    actionGridMatrix,
    actionM
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
    children?: React.ReactNode
}
const Info: React.FC<iProps & Props> = (props: iProps & Props) => {
    const [grid, setGrid] = useState<iGridMatrix[]>()

    const handleMouseOver = (event: MouseEvent) => {
        //@ts-ignore
        const id = parseInt(event?.target.id.replace(/\D/g, ''))
        props.actionMatrixColAction(id)
    }
    const handleMouseLeave = (event: MouseEvent) => {
        if (props.gridMatrix) {
            for (let i = 0; i < Object.values(props.gridMatrix).length; i++) {
                props.gridMatrix[i].interest = false
            }
            //@ts-ignore
            props.actionMatrixColAction(0)
        }
    }
    const handleMouseClick = (event: MouseEvent) => {
        //@ts-ignore
        const id = parseInt(event?.target.id.replace(/\D/g, ''))
        if (props.gridMatrix) {
            const start = (id - 1) * props.matrix.N
            const grid: iGridMatrix[] = props.gridMatrix.slice(0, start).concat(props.gridMatrix.slice(start + props.matrix.N))
            for(let i = 0; i < grid.length; i++){
                grid[i].id = i + 1
            }
            props.actionGridMatrix(grid)
            props.actionM(props.matrix.M - 1)
        }
    }

    useEffect(() => {
        setGrid(props.gridMatrix)
    }, [props.gridMatrix])

    return (
        <div className={classes.d_flex}>
            <div className={`${classes.d_flex} ${classes.m_auto}`}>
                <table>
                    <tbody>
                        {props.children && infoClose(props.matrix.M, handleMouseClick)}
                    </tbody>
                </table>
                <div className={`${classes.d_flex} ${classes.flex_column}`}>
                    <div>{props.children}</div>
                    <table>
                        <tbody>
                            {props.children && drawing('info_side#', 1, props.matrix.N, infoHorizont(props.gridMatrix, props.matrix.N))}
                        </tbody>
                    </table>
                </div>
                <table>
                    <tbody>
                        {props.children && drawing('info_horizon#', props.matrix.M, 1, infoSide(props.gridMatrix, props.matrix.M), handleMouseOver, handleMouseLeave)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connector(Info)