import axios from 'axios'

import { normalAlert } from '../helper-functions/sweetalert'

export const startGetAddresses = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3300/api/address/list', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                dispatch(setAddresses(data))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const setAddresses = (data) => {
    return {
        type : 'SET_ADDRESSES',
        payload : data
    }
}

export const startDeleteAddress = (_id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3300/api/address/delete/${_id}`, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(removeAddress(data._id))
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const removeAddress = (id) => {
    return {
        type : 'REMOVE_ADDRESS',
        payload : id
    }
}

export const startCreateAddress = (formData, clearForm) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/address/create', formData, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert("Address Added Successfully!", 'success')
                clearForm()
                dispatch(addAddress(data))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const addAddress = (data) => {
    return {
        type : 'ADD_ADDRESS',
        payload : data
    }
}

export const startUpdateAddress = (formData, clearForm, _id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3300/api/address/update/${_id}`, formData, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert('Address Updated Successfully!', 'success')
                clearForm()
                dispatch(updateAddress(data))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const updateAddress = (data) => {
    return {
        type : 'UPDATE_ADDRESS',
        payload : data
    }
}

export const startDefaultAddress = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`http://localhost:3300/api/address/default/${id}`, {} , {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            } else if(data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                normalAlert("Default Address Changed", 'success')
                dispatch(setAddresses(data))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}