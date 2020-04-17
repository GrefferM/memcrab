import React from 'react'

import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    name: string
    label: string
    type: string
    placeholder: string
}
const FormControl: React.FC<iProps> = (props: iProps) => {
    return (
        <div className={classes.form__group}>
            <label className={classes.label} htmlFor={`exampleInput${props.name}`} aria-describedby={`${props.name.toLowerCase()}Help`}>{props.label}</label>
            <input type={props.type} id={`exampleInput${props.name}`} className={classes.form__control} placeholder={props.placeholder}/>
        </div>
    )
}

export default FormControl