import axios from 'axios'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async () => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/register', formData)
            if(data.hasOwnProperty('success')){
                alert(data.success)
                clearAndRedirect()
            } else if(data.hasOwnProperty('errors')){
                alert(data.message)
            } else if(data.hasOwnProperty('notice')){
                alert(data.notice)
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const startLoginUser = (formData, clearAndRedirect) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/login', formData)
            if(data.hasOwnProperty('success')){
                localStorage.setItem('token', data.token)
                alert(data.success)
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
                        alert(result.message)
                    }
                } catch (error) {
                    alert(error)
                }
            } else if(data.hasOwnProperty('notice')){
                alert(data.notice)
            }
        } catch (error) {
            alert(error)
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
                alert(data.message)
            } else {
                dispatch(setUser(data))
            }
        } catch (error) {
            alert(error)
        }
    }
}

const setUser = (data) => {
    return {
        type : 'SET_USER',
        payload : data
    }
}