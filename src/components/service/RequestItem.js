import React from "react"
import { useDispatch } from "react-redux"

const RequestItem = (props) => {
    const {
        _id, 
        description, 
        category, 
        createdAt, 
        status, 
        billAmount
    } = props

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(startDeleteRequest(_id)) 
    }
    
    return (
        <div>
            <b>Category - {category.charAt(0).toUpperCase() + category.slice(1)}</b>
            <p>Description - {description}</p>
            <span>Added on - {createdAt.slice(0,10)}</span>
            <span>Status - {status.charAt(0).toUpperCase() + status.slice(1)}</span>
            {Boolean(billAmount) && <span>Total Bill Amount - Rs. {billAmount}</span>}
            {
                status === 'added' && 
                <div>
                    <button>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button>See Propasals</button>
                </div>
            }
        </div>
    )
}

export default RequestItem