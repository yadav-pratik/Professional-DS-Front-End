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
        default : {
            return [...state]
        }
    }
}

export default serviceRequestReducer