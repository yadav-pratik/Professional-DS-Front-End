import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

import AddressLine from "../address/AddressLine"

import { startPostRequest } from "../../actions/serviceRequestActions"
import AddressForm from "../address/AddressForm"

const RequestForm = (props) => {
    const [expertise, setExpertise] = useState('')
    const [description, setDescription] = useState('')
    const [selectedAddress, setSelectedAddress] = useState('')

    const addresses = useSelector((state) => {
        return state.addresses
    })

    const dispatch = useDispatch()

    const textareaStyle = {
        height : "10vh",
        width : "30vw",
        maxHeight : '200px',
        minHeight : '60px',
        maxWidth : '500px',
        minWidth : '250px'
    }

    const expertiseType = ['plumber','electrician','carpenter','painter']

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'expertise'){
            setExpertise(e.target.value)
        } else if(name === 'description'){
            setDescription(e.target.value)
        }
    }

    const addressChange = (id) => {
        setSelectedAddress(id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            category : expertise,
            description,
            address : selectedAddress
        }

        dispatch(startPostRequest(formData))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <select value={expertise} onChange={handleChange} name="expertise">
                    <option value="">What kind of Professional you need?</option>
                    { expertiseType.map((exp, i) => {
                        return <option key={i} value={exp}>
                            {exp.charAt(0).toUpperCase() + exp.slice(1)}
                        </option>
                    })}
                </select>
                <br/><br/>
                <textarea 
                    value={description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Add a brief description about the service you need. It helps our Professionals propose with an approximate amount."
                    style={textareaStyle}
                >
                </textarea>
                <br/><br/>
                { addresses.length === 0 ? (
                        <h4>Hmmm... Seems like you haven't added any address yet. <Link to="/user/addresses">Add your first address!</Link></h4>
                    ) : (
                        <div>
                            <label>Select an Address</label>
                            {addresses.map(address => {
                                return <AddressLine 
                                    key={address._id}
                                    {...address}
                                    selectedAddress={selectedAddress}
                                    addressChange={addressChange}
                                />
                            })}

                        </div>
                    )                
                }
                <br/>
                <input 
                    type="submit"
                    value="Post Request"
                />
            </form>
        </div>
    )
}

export default RequestForm