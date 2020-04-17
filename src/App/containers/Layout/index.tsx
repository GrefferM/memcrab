import React from 'react'

import { HeightLayout } from '@/context'
// Interface indicates
// what parameters are in the component
interface iProps {
    children?: React.ReactNode
}
const Layout: React.FC<iProps> = (props: iProps) => {
    return (
        <HeightLayout.Provider value={{ height: `calc(100vh - 1px)` }}>
            {props.children}
        </HeightLayout.Provider>
    )
}

export default Layout