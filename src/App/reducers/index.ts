import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Error from '@/reducers/Error'

export default (history : History) => combineReducers({
    Error,
    router: connectRouter(history)
})