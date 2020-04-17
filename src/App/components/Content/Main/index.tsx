import React from 'react'

import FormControl from '@/components/Form/FormControl'
import Button, { TypeButton } from '@/components/Form/Button'

import classes from './index.module.scss'
const Main: React.FC = () => {
    return (
        <div>
            <div className={classes.header}>
                <img src={require('./react.png').default} alt="" />
                <div className={classes.title}>Test Job Memcrab</div>
                <img src={require('./react.png').default} alt="" />
            </div>
            <form method='POST' action=''>
                <FormControl name='M' label='Enter the number M' type='number' placeholder='Number M' />
                <FormControl name='N' label='Enter the number N' type='number' placeholder='Number N' />
                <FormControl name='X' label='Enter the number X' type='number' placeholder='Number X' />
                <div className={classes.btn}>
                    <Button type={TypeButton.submit} text='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Main