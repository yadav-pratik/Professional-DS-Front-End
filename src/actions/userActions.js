import axios from 'axios'

export const startRegisterUser = (formData, clearAndRedirect) => {
    return async () => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/user/register', formData)
            if(data.hasOwnProperty('success')){
                alert(data.success)
                clearAndRedirect()
            } else {
                alert(data.notice)
            }
        } catch (error) {
            alert(error)
        }
    }
}