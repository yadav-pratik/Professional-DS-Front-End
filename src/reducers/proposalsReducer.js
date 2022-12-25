const initialProposalsValue = []

const proposalsReducer = (state = initialProposalsValue, action) => {
    switch(action.type) {
        case 'SET_PROPOSALS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default proposalsReducer