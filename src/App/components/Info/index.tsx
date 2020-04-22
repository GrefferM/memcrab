import React, { MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { actionMatrixColAction } from '@/actions/actionMatrix'
import {
    getGridMatrix,
    getMatrix
} from '@/selectors'

import { infoSide, infoHorizon, drawing } from './drawing'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    gridMatrix: getGridMatrix(state),
    matrix: getMatrix(state)
})
const mapDispatch = {
    actionMatrixColAction
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
    return (
        <div className={classes.d_flex}>
            <div className={`${classes.d_flex} ${classes.m_auto}`}>
                <div className={`${classes.d_flex} ${classes.flex_column}`}>
                    <div>{props.children}</div>
                    <table>
                        <tbody>
                            {props.children && drawing('info_side#', 1, props.matrix.N, infoSide(props.gridMatrix, props.matrix.N))}
                        </tbody>
                    </table>
                </div>
                <table>
                    <tbody>
                        {props.children && drawing('info_horizon#', props.matrix.M, 1, infoHorizon(props.gridMatrix, props.matrix.M), handleMouseOver, handleMouseLeave)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connector(Info)