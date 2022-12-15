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
        default : {
            return [...state]
        }
    }
}

export default addressesReducer