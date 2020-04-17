import React from 'react'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'
// Interface indicates
// what parameters are in the component
interface iProps {
    children?: React.ReactNode
}
const Layout: React.FC<iProps> = (props: iProps) => {
    return (
        <div className={classes.container}>
            <HeightLayout.Provider value={{ height: `calc(100vh - 1px)` }}>
                {props.children}
            </HeightLayout.Provider>
        </div>
    )
}

export default Layout