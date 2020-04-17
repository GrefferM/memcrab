import React from 'react'

import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
export enum TypeButton {
    button,
    submit,
    reset
}
interface iProps {
    text: string
    type: TypeButton
}
const Button: React.FC<iProps> = (props: iProps) => {
    return (
        //@ts-ignore
        <button className={`${classes.btn} ${classes.btn__primary}`} type={props.type}>{props.text}</button>
    )
}

export default Button