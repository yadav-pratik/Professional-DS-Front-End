const userInitialValue = {}

const userReducer = (state = userInitialValue, action) => {
    switch(action.type){
        case 'SET_USER' : {
            return {...action.payload}
        }
        default : {
            return state
        }
    }
}

export default userReducer