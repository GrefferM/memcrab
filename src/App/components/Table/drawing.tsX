import React from 'react'

import { iGridMatrix } from '@/interfaces/iMatrix'
import classes from './index.module.scss'

function downLeft(
    id: number,
    step: number,
    active: number[],
    N: number,
    M: number
) {
    if (step > 0 && id - 1 + N <= M * N && (id - 1 + N) % N !== 0) {
        if (active.includes(id - 1 + N)) {
            downLeft(id - 1 + N, step, active, N, M)
        } else {
            active.push(id - 1 + N)
        }
    } else if (step > 0 && id + N <= M * N && (id - 1 + N) % N === 0) {
        if (active.includes(id + N)) {
            downLeft(id + N, step, active, N, M)
        } else {
            active.push(id + N)
            return {
                idSegment: id + N,
                result: true
            }
        }
    } else if (step > 0 && (id - 1) % N !== 0) {
        if (active.includes(id - 1)) {
            downLeft(id - 1, step, active, N, M)
        } else {
            active.push(id - 1)
            return {
                idSegment: id - 1,
                result: true
            }
        }
    } else {
        return {
            idSegment: 0,
            result: false
        }
    }
    return {
        idSegment: id - 1 + N,
        result: true
    }
}
function downRight(
    id: number,
    step: number,
    active: number[],
    N: number,
    M: number
) {
    if (step > 0 && id + 1 + N <= M * N && (id + 1 + N) % N !== 1) {
        if (active.includes(id + 1 + N)) {
            downRight(id + 1 + N, step, active, N, M)
        } else {
            active.push(id + 1 + N)
        }
    } else if (step > 0 && id + N <= M * N && (id + 1 + N) % N === 1) {
        if (active.includes(id + N)) {
            downRight(id + N, step, active, N, M)
        } else {
            active.push(id + N)
            return {
                idSegment: id + N,
                result: true
            }
        }
    } else if (step > 0 && (id + 1) % N !== 1) {
        if (active.includes(id + 1)) {
            downLeft(id + 1, step, active, N, M)
        } else {
            active.push(id + 1)
            return {
                idSegment: id + 1,
                result: true
            }
        }
    } else {
        return {
            idSegment: 0,
            result: false
        }
    }
    return {
        idSegment: id + 1 + N,
        result: true
    }
}
function topLeft(
    id: number,
    step: number,
    active: number[],
    N: number,
    M: number
) {
    if (step > 0 && id - 1 - N > 0 && (id - 1 - N) % N !== 0) {
        if (active.includes(id - 1 - N)) {
            topLeft(id - 1 - N, step, active, N, M)
        } else {
            active.push(id - 1 - N)
        }
    } else if (step > 0 && id - N > 0 && (id - 1 - N) % N === 0) {
        if (active.includes(id - N)) {
            topLeft(id - N, step, active, N, M)
        } else {
            active.push(id - N)
            return {
                idSegment: id - N,
                result: true
            }
        }
    } else if (step > 0 && (id - 1) % N !== 0) {
        if (active.includes(id - 1)) {
            downLeft(id - 1, step, active, N, M)
        } else {
            active.push(id - 1)
            return {
                idSegment: id - 1,
                result: true
            }
        }
    } else {
        return {
            idSegment: 0,
            result: false
        }
    }
    return {
        idSegment: id - 1 - N,
        result: true
    }
}

function topRight(
    id: number,
    step: number,
    active: number[],
    N: number,
    M: number
) {
    if (step > 0 && id + 1 - N > 0 && (id + 1 - N) % N !== 1) {
        if (active.includes(id + 1 - N)) {
            topRight(id + 1 - N, step, active, N, M)
        } else {
            active.push(id + 1 - N)
        }
    } else if (step > 0 && id - N > 0 && (id + 1 - N) % N === 1) {
        if (active.includes(id - N)) {
            topRight(id - N, step, active, N, M)
        } else {
            active.push(id - N)
            return {
                idSegment: id - N,
                result: true
            }
        }
    } else if (step > 0 && (id + 1) % N !== 1) {
        if (active.includes(id + 1)) {
            downLeft(id + 1, step, active, N, M)
        } else {
            active.push(id + 1)
            return {
                idSegment: id + 1,
                result: true
            }
        }
    } else {
        return {
            idSegment: 0,
            result: false
        }
    }
    return {
        idSegment: id + 1 - N,
        result: true
    }
}
function Segment_1(
    id: number,
    X: number,
    active: number[],
    start: number,
    end: number
) {
    if (X > 0 && start !== 0 && end !== 0) {
        while (!active.includes(start - 1) && start - 1 !== id) {
            active.push(--start)
            --X
        }
    }
    return X
}
function Segment_2(
    id: number,
    X: number,
    N: number,
    active: number[],
    start: number,
    end: number
) {
    if (X > 0 && start !== 0 && end !== 0) {
        while (!active.includes(start - N) && start - N !== id) {
            start -= N
            active.push(start)
            --X
        }
    }
    return X
}
function Segment_3(
    id: number,
    X: number,
    active: number[],
    start: number,
    end: number
) {
    if (X > 0 && start !== 0 && end !== 0) {
        while (!active.includes(start + 1) && start + 1 !== id) {
            active.push(++start)
            --X
        }
    }
    return X
}
function Segment_4(
    id: number,
    X: number,
    N: number,
    active: number[],
    start: number,
    end: number
) {
    if (X > 0 && start !== 0 && end !== 0) {
        while (!active.includes(start + N) && start + N !== id) {
            start += N
            active.push(start)
            --X
        }
    }
    return X
}
export function bypass(
    id: number,
    M: number,
    N: number,
    X: number,
    active: number[],
    idSegment_1: number = 0,
    isSegment_1: boolean = true,
    idSegment_2: number = 0,
    isSegment_2: boolean = true,
    idSegment_3: number = 0,
    isSegment_3: boolean = true,
    idSegment_4: number = 0,
    isSegment_4: boolean = true
) {
    if (idSegment_1 === 0) {
        idSegment_1 = id
    }
    if (isSegment_1) {
        const { idSegment, result } = downRight(idSegment_1, X, active, N, M)
        idSegment_1 = idSegment ? idSegment : id
        isSegment_1 = result
        --X
    }

    if (idSegment_2 === 0) {
        idSegment_2 = id
    }
    if (isSegment_2) {
        const { idSegment, result } = downLeft(idSegment_2, X, active, N, M)
        idSegment_2 = idSegment ? idSegment : id
        isSegment_2 = result
        --X
    }

    if (idSegment_3 === 0) {
        idSegment_3 = id
    }
    if (isSegment_3) {
        const { idSegment, result } = topLeft(idSegment_3, X, active, N, M)
        idSegment_3 = idSegment ? idSegment : id
        isSegment_3 = result
        --X
    }

    if (idSegment_4 === 0) {
        idSegment_4 = id
    }
    if (isSegment_4) {
        const { idSegment, result } = topRight(idSegment_4, X, active, N, M)
        idSegment_4 = idSegment ? idSegment : id
        isSegment_4 = result
        --X
    }

    if (isSegment_1) {
        X = Segment_1(id, X, active, idSegment_1, idSegment_2)
    }
    if (isSegment_2) {
        X = Segment_2(id, X, N, active, idSegment_2, idSegment_3)
    }
    if (isSegment_3) {
        X = Segment_3(id, X, active, idSegment_3, idSegment_4)
    }
    if (isSegment_4) {
        X = Segment_4(id, X, N, active, idSegment_4, idSegment_1)
    }

    if (X > 0) {
        if (isSegment_1 || isSegment_2 || isSegment_3 || isSegment_4) {
            bypass(
                id,
                M,
                N,
                X,
                active,
                idSegment_1,
                isSegment_1,
                idSegment_2,
                isSegment_2,
                idSegment_3,
                isSegment_3,
                idSegment_4,
                isSegment_4
            )
        } else {
            return
        }
    }
}

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export const СreateGrid = (M: number, N: number) => {
    let index = 1
    const grid: iGridMatrix[] = []
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            grid.push({ id: index++, ranNumber: randomNumber(100, 1000), active: false, interest: false, interestNumber: 0 })
        }
    }
    return grid
}
export const ControlGrid = (grid: iGridMatrix[], M: number, N: number) => {
    try {
        if (Object.values(grid).length < M * N) {
            const _grid: iGridMatrix[] = []
            let index = grid[Object.values(grid).length - 1].id
            for (let i = 0; i < Object.values(grid).length; i++) {
                _grid.push(grid[i])
            }
            for (let i = 0; i < M * N - Object.values(grid).length; i++) {
                _grid.push({ id: ++index, ranNumber: randomNumber(100, 1000), active: false, interest: false, interestNumber: 0 })
            }
            return _grid
        } else {
            const _grid: iGridMatrix[] = []
            for (let i = 0; i < M * N; i++) {
                _grid.push(grid[i])
            }
            return _grid
        }
    } catch (error) { return [] }
}
const styleInterestCol = (interest: number) => {
    return { background: `linear-gradient(0deg, rgba(151,235,173,1) ${interest}%, rgba(232,244,253,1) ${interest}%)` }
}
const Col = (count: number, index: number, gridState: iGridMatrix[], handle: Function) => {
    try {
        const type = new Set<JSX.Element>()
        for (let j = 0; j < count; j++) {
            //@ts-ignore
            type.add(<td id={`col#${gridState[index].id}`} onClick={handle} key={j} style={gridState[index].interest ? styleInterestCol(gridState[index].interestNumber) : {}} className={`${classes.col} ${gridState[index].active && classes.active}`}>
                {
                    gridState[index].interest ? gridState[index].interestNumber : gridState[index].ranNumber
                }
            </td>)
            index++
        }
        return type
    } catch (error) { }
}
export const drawingGrid = (M: number, N: number, gridState: iGridMatrix[], handle: Function) => {
    let index = 0
    const type = new Set<JSX.Element>()
    for (let i = 0; i < M; i++) {
        type.add(<tr key={i}>{Col(N, index, gridState, handle)}</tr>)
        index += N
    }

    return type
}