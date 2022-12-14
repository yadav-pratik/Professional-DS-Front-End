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
    return async () => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/login', formData)
            if(data.hasOwnProperty('success')){
                localStorage.setItem('token', data.token)
                alert(data.success)
                try {
                    const response = await axios.get('http://localhost:3300/api/user/loginCount', {
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