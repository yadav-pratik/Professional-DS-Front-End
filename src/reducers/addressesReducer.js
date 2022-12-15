const initialAddressesValue = []

const addressesReducer = (state = initialAddressesValue, action) => {
    switch(action.type) {
        case 'SET_ADDRESSES' : {
            return [...action.payload]
        }
        case 'REMOVE_ADDRESS' : {
            return state.filter(address => {
                return address._id !== action.payload
            })
        }
        case 'ADD_ADDRESS' : {
            return [...state, {...action.payload}]
        }
        case 'UPDATE_ADDRESS' : {
            return state.map(address => {
                if(address._id === action.payload._id){
                    return {...address, ...action.payload}
                } else {
                    return {...address}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default addressesReducer