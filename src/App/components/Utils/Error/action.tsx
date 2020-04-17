import React, { useEffect, useContext } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '@/interfaces/iRootState'
import { iError } from '@/interfaces/iError'
import { actionError } from '@/actions/actionError'

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionError
}

const connector = connect(
    mapState,
    mapDispatch
)
// Interface indicates
// what parameters are in the component
interface iPropsErrorBoundary {
    children: React.ReactNode
    title: string
    info: string
    date: string
}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & iPropsErrorBoundary
const ErrorBoundary: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        if (props.title !== '') {
            props.actionError({
                title: props.title,
                info: props.info,
                date: props.date
            } as iError)
        }
    }, [])

    return (
        <>
            {props.children}
        </>
    )
}
export default connector(ErrorBoundary)