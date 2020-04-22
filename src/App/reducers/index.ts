import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Matrix from '@/reducers/Matrix'
import GridMatrix from '@/reducers/GridMatrix'
import ActionCol from '@/reducers/ActionCol'
import Error from '@/reducers/Error'

export default (history : History) => combineReducers({
    Matrix,
    GridMatrix,
    ActionCol,
    Error,
    router: connectRouter(history)
})