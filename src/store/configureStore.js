import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
 
import userReducer from '../reducers/userReducer'
import addressesReducer from '../reducers/addressesReducer'
import isLoggedReducer from '../reducers/isLoggedReducer'
import serviceRequestReducer from '../reducers/serviceRequestReducer'

const configureStore = () => {
    return createStore(combineReducers({
        user : userReducer,
        addresses : addressesReducer,
        isLogged : isLoggedReducer,
        serviceRequests : serviceRequestReducer
    }), applyMiddleware(thunk))
}

export default configureStore