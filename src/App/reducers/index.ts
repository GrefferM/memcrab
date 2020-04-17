import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Matrix from '@/reducers/Matrix'
import GridMatrix from '@/reducers/GridMatrix'
import Error from '@/reducers/Error'

export default (history : History) => combineReducers({
    Matrix,
    GridMatrix,
    Error,
    router: connectRouter(history)
})