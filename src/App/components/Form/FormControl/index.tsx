import React, { ChangeEvent } from 'react'

import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    name: string
    label: string
    type: string
    placeholder: string
    defaultValue?: number
}
const FormControl: React.FC<iProps> = (props: iProps) => {
    return (
        <div className='form__group'>
            <label className={classes.label} htmlFor={`exampleInput${props.name}`} aria-describedby={`${props.name.toLowerCase()}Help`}>{props.label}</label>
            {props.defaultValue ? <input name={props.name} type={props.type} id={`exampleInput${props.name}`} className={classes.form__control} placeholder={props.placeholder} defaultValue={props.defaultValue} /> :
                <input name={props.name} type={props.type} id={`exampleInput${props.name}`} className={classes.form__control} placeholder={props.placeholder} />}
        </div>
    )
}

export default FormControl