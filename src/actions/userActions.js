import axios from 'axios'

import { normalAlert } from '../helper-functions/sweetalert'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async () => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/register', formData)
            if(data.hasOwnProperty('success')){
                normalAlert(data.success, 'success')
                clearAndRedirect()
            } else if(data.hasOwnProperty('errors')){
                normalAlert(data.message, 'error')
            } else if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

export const startLoginUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/login', formData)
            if(data.hasOwnProperty('success')){
                localStorage.setItem('token', data.token)
                normalAlert(data.success, 'success')
                try {
                    const response = await axios.get('http://localhost:3300/api/user/login-count', {
                        headers : {
                            authorization : data.token
                        }
                    })
                    const result = response.data
                    if(result.hasOwnProperty('loginCount')){
                        if(result.loginCount === 1) {
                            clearAndRedirect('addresses')
                        } else {
                            clearAndRedirect('services')
                        }
                    } else if(result.hasOwnProperty('message')){
                        normalAlert(result.message, 'error')
                    }
                } catch (error) {
                    normalAlert(error, 'error')
                }
            } else if(data.hasOwnProperty('notice')){
                normalAlert(data.notice, 'error')
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

export const startGetUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3300/api/user/account', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            if(data.hasOwnProperty('message')){
                normalAlert(data.message, 'error')
            } else {
                dispatch(setUser(data))
            }
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const setUser = (data) => {
    return {
        type : 'SET_USER',
        payload : data
    }
}