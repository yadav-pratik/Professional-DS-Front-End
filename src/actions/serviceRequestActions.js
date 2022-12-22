import axios from 'axios'

export const startPostRequest = (formData) => {
    console.log(formData)
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3300/api/service-request/create', formData, {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            }) 
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }
}