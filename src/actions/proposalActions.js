import axios from 'axios'

import { normalAlert } from '../helper-functions/sweetalert'

export const startGetCustomerProposals = (sId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3300/api/proposal/customer-list/${sId}`, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(setProposals(data))
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const setProposals = (data) => {
    return {
        type : 'SET_PROPOSALS',
        payload : data
    }
}