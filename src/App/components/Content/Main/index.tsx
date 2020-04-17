import React, { useEffect, useState, FormEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import FormControl from '@/components/Form/FormControl'
import Button, { TypeButton } from '@/components/Form/Button'
import Table from '@/components/Table'
import Message from '@/components/Message'

import iRootState from '@/interfaces/iRootState'
import { iMatrix } from '@/interfaces/iMatrix'
import { getMatrix } from '@/selectors'
import {
    actionM,
    actionN,
    actionX,
    actionInitM,
    actionInitN,
    actionInitX,
    actionGridMatrix
} from '@/actions/actionMatrix'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    matrix: getMatrix(state)
})

const mapDispatch = {
    actionM,
    actionN,
    actionX,
    actionInitM,
    actionInitN,
    actionInitX,
    actionGridMatrix
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux
const Main: React.FC<Props> = (props: Props) => {
    const [message, setMessage] = useState(new Set<string>())
    const [matrix, setMatrix] = useState<iMatrix>()
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //@ts-ignore
        const { M, N, X } = event?.target

        props.actionM(+M.value)
        props.actionN(+N.value)
        props.actionX(+X.value)
    }

    useEffect(() => {
        if (props.matrix.M === 0 && localStorage.getItem('M')) {
            props.actionInitM()
        }
        if (props.matrix.N === 0 && localStorage.getItem('N')) {
            props.actionInitN()
        }
        if (props.matrix.X === 0 && localStorage.getItem('X')) {
            props.actionInitX()
        }
        setMatrix(props.matrix)
    }, [props.matrix])
    // Check if this message is in the Set collection.
    const isMessageSkipped = (activeMessage: string) => {
        return message.has(activeMessage)
    }
    // The event adds a message to the Set collection.
    const handleAddMessage = (activeMessage: string) => {
        let newMessage = message
        if (!isMessageSkipped(activeMessage)) {
            newMessage = new Set(newMessage.values())
            newMessage.add(activeMessage)
            setMessage(newMessage)
        }
    }
    // The event will be deleted from the Set collection.
    const handleDeleteMessage = (activeMessage: string) => {
        let newMessage = message
        if (isMessageSkipped(activeMessage)) {
            newMessage = new Set(newMessage.values())
            newMessage.delete(activeMessage)
            setMessage(newMessage)
        }
    }
    const showTable = (matrix: iMatrix) => {
        if (props.matrix.M === 0) {
            handleAddMessage('Enter the number M')
        } else {
            handleDeleteMessage('Enter the number M')
        }
        if (props.matrix.N === 0) {
            handleAddMessage('Enter the number N')
        } else {
            handleDeleteMessage('Enter the number N')
        }
        if (props.matrix.X === 0) {
            handleAddMessage('Enter the number X')
        } else {
            handleDeleteMessage('Enter the number X')
        }

        if (message.size === 0) {
            return <Table M={props.matrix.M} N={props.matrix.N} X={props.matrix.X} />
        }
    }

    return (
        <>
            <div className={classes.header}>
                <img src={require('./react.png').default} alt="" />
                <div className={classes.title}>Test Job ✌️ Memcrab</div>
                <img src={require('./react.png').default} alt="" />
            </div>
            {message && Array.from(message).map((value: string, index: number) =>
                <div key={index}><Message message={value} clearMessage={handleDeleteMessage} /></div>)
            }
            <form method='POST' action='' onSubmit={handleOnSubmit}>
                <FormControl name='M' defaultValue={matrix && matrix.M} label='Enter the number M' type='number' placeholder='Number M' />
                <FormControl name='N' defaultValue={matrix && matrix.N} label='Enter the number N' type='number' placeholder='Number N' />
                <FormControl name='X' defaultValue={matrix && matrix.X} label='Enter the number X' type='number' placeholder='Number X' />
                <div className={classes.btn}>
                    <Button type={TypeButton.submit} text='Submit' />
                </div>
            </form>
            {showTable(props.matrix)}
        </>
    )
}

export default connector(Main)