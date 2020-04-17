import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Matrix from '@/reducers/Matrix'
import Error from '@/reducers/Error'

export default (history : History) => combineReducers({
    Matrix,
    Error,
    router: connectRouter(history)
})