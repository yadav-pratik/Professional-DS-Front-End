const initialAddressesValue = []

const addressesReducer = (state = initialAddressesValue, action) => {
    switch(action.type) {
        case 'SET_ADDRESSES' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default addressesReducer