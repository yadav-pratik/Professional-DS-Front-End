import React, { useState } from "react"
import { useDispatch } from "react-redux"
import swal from 'sweetalert'

import { startDeleteRequest, startUpdateRequest } from "../../actions/serviceRequestActions"

import RequestForm from "./RequestForm"

const RequestItem = (props) => {
    const [toggle, setToggle] = useState(false)

    const {
        _id, 
        description, 
        category, 
        createdAt, 
        status, 
        billAmount,
        address
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

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const formSubmit = (formData, clearAndToggle, _id) => {
        dispatch(startUpdateRequest(formData, clearAndToggle, _id))
    } 

    return (
        <div>
            { !toggle ? (
                    <div>
                        <b>Category - {category.charAt(0).toUpperCase() + category.slice(1)}</b>
                        <p>Description - {description}</p>
                        <span>Added on - {createdAt.slice(0,10)}</span>
                        <span>Status - {status.charAt(0).toUpperCase() + status.slice(1)}</span>
                        {address && 
                            <p>Address - {`${address.doorNumber} ${address.landmark} ${address.area} ${address.street} ${address.city} ${address.state} - ${address.pincode}`}
                            </p>
                        }
                        {status !== 'added' && <b>{status === 'completed' ? 'Final' : 'Expected'} Bill Amount - Rs. {billAmount}</b>}
                        {
                            status === 'added' && 
                            <div>
                                <button onClick={handleToggle}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                                <button>See Propasals</button>
                            </div>
                        }
                    </div>
                ) : (
                    <div>
                        <RequestForm
                            handleToggle={handleToggle}
                            _id={_id}
                            category={category}
                            description={description}
                            address={address._id}
                            formSubmit={formSubmit}
                        />
                        <button onClick={handleToggle}>Cancel</button>
                    </div>
                )
            }
        </div>
        
    )
}

export default RequestItem