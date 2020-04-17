import React, { useEffect, FormEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import FormControl from '@/components/Form/FormControl'
import Button, { TypeButton } from '@/components/Form/Button'
import Table from '@/components/Table'

import iRootState from '@/interfaces/iRootState'
import { iMatrix } from '@/interfaces/iMatrix'
import { getMatrix } from '@/selectors'
import {
    actionM,
    actionN,
    actionX
} from '@/actions/actionMatrix'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    matrix: getMatrix(state)
})

const mapDispatch = {
    actionM,
    actionN,
    actionX
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
const Main: React.FC<Props> = (props: Props) => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //@ts-ignore
        const { M, N, X } = event?.target

        props.actionM(M.value)
        props.actionN(N.value)
        props.actionX(X.value)
    }

    useEffect(() => { }, [props.matrix])

    return (
        <div>
            <div className={classes.header}>
                <img src={require('./react.png').default} alt="" />
                <div className={classes.title}>Test Job Memcrab</div>
                <img src={require('./react.png').default} alt="" />
            </div>
            <form method='POST' action='' onSubmit={handleOnSubmit}>
                <FormControl name='M' label='Enter the number M' type='number' placeholder='Number M' />
                <FormControl name='N' label='Enter the number N' type='number' placeholder='Number N' />
                <FormControl name='X' label='Enter the number X' type='number' placeholder='Number X' />
                <div className={classes.btn}>
                    <Button type={TypeButton.submit} text='Submit' />
                </div>
            </form>
            {props.matrix && props.matrix.M && props.matrix.N && props.matrix.X && <Table M={props.matrix.M} N={props.matrix.N} X={props.matrix.X} />}
        </div>
    )
}

export default connector(Main)