import React from 'react'

// Interface indicates
// what parameters are in the component
interface iProps {
    children?: React.ReactNode
}
const Info: React.FC<iProps> = (props: iProps) => {
    return (
        <>{props.children}</>
    )
}

export default Info