import React from 'react'
import { iGridMatrix } from '@/interfaces/iMatrix'

import classes from './index.module.scss'

export const infoHorizon = (grid: iGridMatrix[], step: number) => {
    const sum: number[] = []
    if (grid) {
        let tmp = 0
        const _step = Object.values(grid).length / step
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
    }
    return sum
}
export const infoSide = (grid: iGridMatrix[], step: number) => {
    const sum: number[] = new Array(step).fill(0)
    if (grid) {
        for (let i = 0, j = 0; i < Object.values(grid).length; i++, j++) {
            if (j === step) {
                j = 0
            }
            sum[j] += grid[i].ranNumber
        }
    }
    return sum
}
const Col = (count: number, index: number, grid: number[]) => {
    try {
        const type = new Set<JSX.Element>()
        for (let j = 0; j < count; j++) {
            type.add(<td key={j} className={classes.col}>{grid[index]}</td>)
            index++
        }
        return type
    } catch (error) { }
}
export const drawing = (M: number, N: number, grid: number[]) => {
    let index = 0
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N, index, grid)}</tr>)
        index += N
    }

    return type
}