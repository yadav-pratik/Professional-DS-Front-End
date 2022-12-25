const initialRequestsValue = []

const serviceRequestReducer = (state = initialRequestsValue, action) => {
    switch(action.type) {
        case 'SET_REQUESTS' : {
            return action.payload.map(req => {
                return {...req, proposalToggle : false}
            })
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
        case 'TOGGLE_PROPOSAL' : {
            return state.map(req => {
                if(req._id === action.payload){
                    return {...req, proposalToggle : true}
                } else {
                    return {...req, proposalToggle : false}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default serviceRequestReducer