const initialAddressesValue = []

const addressesReducer = (state = initialAddressesValue, action) => {
    switch(action.type) {
        default : {
            return [...state]
        }
    }
}

export default addressesReducer