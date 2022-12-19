import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
 
import userReducer from '../reducers/userReducer'
import addressesReducer from '../reducers/addressesReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer,
        addresses : addressesReducer,
        isLogged : isLoggedReducer
    }), applyMiddleware(thunk))
}

export default configureStore