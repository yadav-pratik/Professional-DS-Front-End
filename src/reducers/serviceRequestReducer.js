const initialRequestsValue = []

const serviceRequestReducer = (state = initialRequestsValue, action) => {
    switch(action.type) {
        case 'SET_REQUESTS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default serviceRequestReducer