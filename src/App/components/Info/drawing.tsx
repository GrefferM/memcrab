import React from 'react'
import { iGridMatrix } from '@/interfaces/iMatrix'

import classes from './index.module.scss'

export const infoSide = (grid: iGridMatrix[] | undefined, step: number) => {
    if (grid) {
        let tmp = 0
        const sum: number[] = []
        const _step = Math.floor(Object.values(grid).length / step)
        for (let i = 0, j = 0; i < Object.values(grid).length; i++) {
            if (j === _step) {
                sum.push(tmp)
                tmp = 0
                j = 0
            }
            tmp += grid[i].ranNumber
            j++
        }
        sum.push(tmp)
        return sum
    }
    return []
}
export const infoHorizont = (grid: iGridMatrix[] | undefined, step: number) => {
    if (grid) {
        const sum: number[] = new Array(step).fill(0)
        for (let i = 0, j = 0; i < Object.values(grid).length; i++, j++) {
            if (j === step) {
                j = 0
            }
            sum[j] += grid[i].ranNumber
        }
        return sum
    }
    return []
}
const Col = (id: string, count: number, index: number, grid: number[], handleMouseOver?: Function, handleMouseLeave?: Function) => {
    try {
        const type = new Set<JSX.Element>()
        for (let j = 0; j < count; j++) {
            //@ts-ignore
            type.add(<td id={`${id}${index + 1}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave} key={j} className={classes.col}>{grid[index]}</td>)
            index++
        }
        return type
    } catch (error) { }
}
export const drawing = (id: string, M: number, N: number, grid: number[], handleMouseOver?: Function, handleMouseLeave?: Function) => {
    let index = 0
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(id, N, index, grid, handleMouseOver, handleMouseLeave)}</tr>)
        index += N
    }

    return type
}