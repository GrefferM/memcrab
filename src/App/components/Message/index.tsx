import React, { useState } from 'react'

import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    message: string
    clearMessage: Function
}
const Message: React.FC<iProps> = (props: iProps) => {
    const [open, setOpen] = useState(true)
    return <>
        {
            open ? <div className={classes.message}>
                <div className={classes.message__inf}>
                    <i className="fas fa-exclamation-circle"></i>
                    <div className={classes.text}>{props.message}</div>
                </div>
                <div className={classes.close} onClick={() => {
                    setOpen(false)
                    props.clearMessage(props.message)
                }}>
                    <i className="far fa-times-circle"></i>
                </div>
            </div> : <></>
        }
    </>
}

export default Message