import axios from 'axios'

import { normalAlert } from '../helper-functions/sweetalert'

export const startPostRequest = (formData, clearAndRedirect) => {
    return async () => {
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

export const startGetRequest = (status) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3300/api/service-request/customer-list/?status=${status}`, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(setRequests(data))
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const setRequests = (data) => {
    return {
        type : 'SET_REQUESTS',
        payload : data
    }
}

export const startDeleteRequest = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3300/api/service-request/delete/${id}`, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert('Request Deleted Successfully!', 'success')
                dispatch(deleteRequest(data._id))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const deleteRequest = (id) => {
    return {
        type : 'DELETE_REQUEST',
        payload : id
    }
}

export const startUpdateRequest = (formData, clearAndToggle, _id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3300/api/service-request/update/${_id}`, formData, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert('Request Updated!', 'success')
                dispatch(updateRequest(data))
                clearAndToggle()
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const updateRequest = (data) => {
    return {
        type : 'UPDATE_REQUEST',
        payload : data
    }
}

export const toggleProposal = (id) => {
    return {
        type : 'TOGGLE_PROPOSAL',
        payload : id
    }
}