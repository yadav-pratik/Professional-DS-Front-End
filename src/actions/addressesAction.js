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