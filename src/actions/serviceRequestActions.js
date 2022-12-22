import axios from 'axios'

import { normalAlert } from '../helper-functions/sweetalert'

export const startPostRequest = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/service-request/create', formData, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            }) 
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else  if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert('Request Posted Successfully!', 'success', 'Now Professionals can make Proposals to your request and you can choose one that best suits you!!')
                clearAndRedirect()
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}