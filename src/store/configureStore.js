import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer
    }), applyMiddleware(thunk))
}

export default configureStore