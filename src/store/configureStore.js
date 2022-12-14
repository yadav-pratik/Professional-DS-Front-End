import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
 
import userReducer from '../reducers/userReducer'
import addressesReducer from '../reducers/addressesReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer,
        addresses : addressesReducer
    }), applyMiddleware(thunk))
}

export default configureStore