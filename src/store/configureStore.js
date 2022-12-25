import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
 
import userReducer from '../reducers/userReducer'
import addressesReducer from '../reducers/addressesReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'
import serviceRequestReducer from '../reducers/serviceRequestReducer'
import proposalsReducer from '../reducers/proposalsReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer,
        addresses : addressesReducer,
        isLogged : isLoggedReducer,
        serviceRequests : serviceRequestReducer,
        proposals : proposalsReducer
    }), applyMiddleware(thunk))
}

export default configureStore