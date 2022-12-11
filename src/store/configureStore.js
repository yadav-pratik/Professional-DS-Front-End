import { createStore, combineReducers } from 'redux'

import userReducer from '../reducers/userReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer
    }))
}

export default configureStore