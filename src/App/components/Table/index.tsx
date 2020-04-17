import React from 'react'

import classes from './index.module.scss'
const Col = (count: number) => {
    const type = new Set<JSX.Element>()
    for (let i = 0; i < count; i++) {
        type.add(<td key={i}>99</td>)
    }
    return type
}
const Row = (M: number, N: number) => {
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N)}</tr>)
    }
    return type
}
// Interface indicates
// what parameters are in the component
interface iProps {
    M: number
    N: number
    X: number
}
const Table: React.FC<iProps> = (props: iProps) => {
    return (
        <table className={classes.table}>
            <thead>
                { props.N && Row(1, props.N)}
            </thead>
            <tbody>
                { props.M && props.N && Row(props.M, props.N)}
            </tbody>
        </table>
    )
}

export default Table