const initialProposalsValue = []

const proposalsReducer = (state = initialProposalsValue, action) => {
    switch(action.type) {
        default : {
            return [...state]
        }
    }
}

export default proposalsReducer