const initialRequestsValue = []

const serviceRequestReducer = (state = initialRequestsValue, action) => {
    switch(action.type) {
        case 'SET_REQUESTS' : {
            return [...action.payload]
        }
        case 'DELETE_REQUEST' : {
            return state.filter(req => {
                return req._id !== action.payload
            })
        }
        case 'UPDATE_REQUEST' : {
            return state.map(req => {
                if(req._id === action.payload._id){
                    return {...req, ...action.payload}
                } else {
                    return {...req}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default serviceRequestReducer