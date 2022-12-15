import React, { useState } from "react"

const AddressForm = (props) => {
    const [doorNumber, setDoorNumber] = useState('')
    const [landmark, setLandmark] = useState('')
    const [area, setArea] = useState('')
    const [street, setStreet] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const redFontColor = { color : 'red'}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'doorNumber'){
            setDoorNumber(e.target.value)
        } else  if(name === 'landmark'){
            setLandmark(e.target.value)
        } else  if(name === 'area'){
            setArea(e.target.value)
        } else  if(name === 'street'){
            setStreet(e.target.value)
        } else  if(name === 'pincode'){
            setPincode(e.target.value)
        } else  if(name === 'city'){
            setCity(e.target.value)
        } else  if(name === 'state'){
            setState(e.target.value)
        } 
    }

    const runValidations = () => {
        if(doorNumber.length === 0 
            || area.length === 0 
                || pincode.length ===0
                    || city.length === 0
                        || state.length === 0) {
            errors.required = "* fields are required"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(errors.hasOwnProperty('required')){
            setFormErrors(errors)
        } else {
            setFormErrors({})

            const formData = {
                doorNumber,
                landmark,
                area,
                street,
                city,
                state,
                pincode
            }

            console.log(formData)
        }
    }
    return (
        <div>
            <h3>Add new Address</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={doorNumber}
                    name="doorNumber"
                    onChange={handleChange}
                    placeholder="Enter Door Number..."
                />
                <span style={redFontColor}>*</span>
                <input 
                    type="text"
                    value={area}
                    name="area"
                    onChange={handleChange}
                    placeholder="Enter the Area..."
                />
                <span style={redFontColor}>*</span>
                <input 
                    type="text"
                    value={landmark}
                    name="landmark"
                    onChange={handleChange}
                    placeholder="Enter a Landmark..."
                />
                <input 
                    type="text"
                    value={street}
                    name="street"
                    onChange={handleChange}
                    placeholder="Enter Street name..."
                />
                <input 
                    type="text"
                    value={pincode}
                    name="pincode"
                    onChange={handleChange}
                    placeholder="Enter Pincode..."
                />
                <span style={redFontColor}>*</span>
                <input 
                    type="text"
                    value={city}
                    name="city"
                    onChange={handleChange}
                    placeholder="Enter City..."
                />
                <span style={redFontColor}>*</span>
                <input 
                    type="text"
                    value={state}
                    name="state"
                    onChange={handleChange}
                    placeholder="Enter State..."
                />
                <span style={redFontColor}>*</span>
                <p style={redFontColor}>{formErrors.required && formErrors.required}</p>
                <input 
                    type="submit"
                    value="Add Address"
                />
            </form>
        </div>
    )
}

export default AddressForm