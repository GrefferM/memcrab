import React, { useContext } from 'react'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    title: string
    supTitle: string
}
const Paper: React.FC<iProps> = (props: iProps) => {
    const heightContext = useContext(HeightLayout)
    return (
        <div className={classes.root} style={{ minHeight: heightContext.height }}>
            <img src={require('./paper.png').default} alt="" />
            <div className={classes.title}>{props.title}</div>
            <div className={classes.supTitle}>{props.supTitle}</div>
        </div>
    )
}

export default Paper