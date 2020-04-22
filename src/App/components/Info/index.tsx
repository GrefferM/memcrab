import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
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

const Info: React.FC<iProps & Props> = (props: iProps & Props) => {
    return (
        <div className={classes.d_flex}>
            <div className={`${classes.d_flex} ${classes.m_auto}`}>
                <div className={`${classes.d_flex} ${classes.flex_column}`}>
                    <div>{props.children}</div>
                    <table>
                        <tbody>
                            {drawing(1, props.matrix.N, infoSide(props.gridMatrix, props.matrix.N))}
                        </tbody>
                    </table>
                </div>
                <table>
                    <tbody>
                        {drawing(props.matrix.M, 1, infoHorizon(props.gridMatrix, props.matrix.M))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connector(Info)