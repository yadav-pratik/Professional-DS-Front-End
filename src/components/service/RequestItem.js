import React from "react"
import { useDispatch } from "react-redux"
import swal from 'sweetalert'

import { startDeleteRequest } from "../../actions/serviceRequestActions"

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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Service Request!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(startDeleteRequest(_id))
            } else {
                swal(`Your Service Request is safe!`)
            }
        })
         
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