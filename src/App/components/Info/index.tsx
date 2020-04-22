import React, { useEffect, useState, MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { iGridMatrix } from '@/interfaces/iMatrix'
import { actionMatrixColAction } from '@/actions/actionMatrix'
import {
    getGridMatrix,
    getMatrix
} from '@/selectors'

import { infoSide, infoHorizont, drawing } from './drawing'
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

    useEffect(() => {
        setGrid(props.gridMatrix)
    }, [props.gridMatrix])

    interface iPropsInfo {
        grid: iGridMatrix[] | undefined
        M: number
        N: number
    }
    const InfoSideTable: React.FC<iPropsInfo> = (props: iPropsInfo) => (
        <table>
            <tbody>
                {drawing('info_horizon#', props.M, 1, infoSide(props.grid, props.M), handleMouseOver, handleMouseLeave)}
            </tbody>
        </table>
    )
    const InfoHorizontTable: React.FC<iPropsInfo> = (props: iPropsInfo) => (
        <table>
            <tbody>
                {drawing('info_side#', 1, props.N, infoHorizont(props.grid, props.N))}
            </tbody>
        </table>
    )

    return (
        <div className={classes.d_flex}>
            <div className={`${classes.d_flex} ${classes.m_auto}`}>
                <div className={`${classes.d_flex} ${classes.flex_column}`}>
                    <div>{props.children}</div>
                    {props.children && <InfoHorizontTable grid={grid} M={props.matrix.M} N={props.matrix.N} />}
                </div>
                {props.children && <InfoSideTable grid={grid} M={props.matrix.M} N={props.matrix.N} />}
            </div>
        </div>
    )
}

export default connector(Info)