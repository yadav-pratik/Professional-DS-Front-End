import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, withRouter } from 'react-router-dom'

import AddressLine from "../address/AddressLine"

import { startPostRequest } from "../../actions/serviceRequestActions"
import AddressForm from "../address/AddressForm"

const RequestForm = (props) => {
    const { _id, description : descr, address, handleToggle } = props

    const [expertise, setExpertise] = useState('')
    const [description, setDescription] = useState(descr ? descr : '')
    const [selectedAddress, setSelectedAddress] = useState(address ? address : '')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const addresses = useSelector((state) => {
        return state.addresses
    })

    const dispatch = useDispatch()

    const formErrorStyle = {
        color : 'red'
    }

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

    const runValidation = () => {
        //expertise validation
        if(!handleToggle){
            if(expertise.length === 0){
                errors.expertise = "You must select a Category!"
            }
        }

        //description validation
        if(description.length === 0){
            errors.description = "Your Description helps Professionals assess the job and qoute an approximate proposal! Please add a brief description."
        }

        //address validation
        if(selectedAddress.length === 0){
            errors.selectedAddress = "Please Add an Address."
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                category : expertise,
                description,
                address : selectedAddress
            }

            const clearAndRedirect = () => {
                setExpertise('')
                setDescription('')
                setSelectedAddress('')
                props.history.push('/user/services')
            }
    
            dispatch(startPostRequest(formData, clearAndRedirect))
        } else {
            setFormErrors(errors)
        }

    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                {!handleToggle && 
                <div>
                    <select value={expertise} onChange={handleChange} name="expertise">
                    <option value="">What kind of Professional you need?</option>
                    { expertiseType.map((exp, i) => {
                        return <option key={i} value={exp}>
                            {exp.charAt(0).toUpperCase() + exp.slice(1)}
                        </option>
                    })}
                    </select>
                    {formErrors.expertise ? <p style={formErrorStyle}>{formErrors.expertise}</p> : <><br/><br/></>}
                </div>
                }
                <textarea 
                    value={description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Add a brief description about the service you need. It helps our Professionals propose with an approximate amount."
                    style={textareaStyle}
                >
                </textarea>
                {formErrors.description ? <p style={formErrorStyle}>{formErrors.description}</p> : <><br/><br/></>}
                { addresses.length === 0 ? (
                        <div>
                            <h4>Hmmm... Seems like you haven't added any address yet. <Link to="/user/addresses">Add your first address!</Link></h4>
                            {formErrors.selectedAddress && <p style={formErrorStyle}>{formErrors.selectedAddress}</p>}
                        </div>
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
                    value={handleToggle ? "Update Request" : "Post Request"}
                />
            </form>
        </div>
    )
}

export default withRouter(RequestForm)