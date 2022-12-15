import axios from 'axios'

export const startGetAddresses = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3300/api/address/list', {
                headers : {
                    authorization : localStorage.getItem('token')
                }
            })
            dispatch(setAddresses(data))
        } catch (error) {
            alert(error)
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
            alert(error)
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
                alert(data.notice)
            } else if(data.hasOwnProperty('errors') || data.hasOwnProperty('message')){
                alert(data.message)
            } else {
                alert("Address Added Successfully!")
                clearForm()
                dispatch(addAddress(data))
            }
        } catch (error) {
            alert(error)
        }
    }
}

const addAddress = (data) => {
    return {
        type : 'ADD_ADDRESS',
        payload : data
    }
}