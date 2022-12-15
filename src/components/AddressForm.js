import React, { useState } from "react"

const AddressForm = (props) => {
    const { 
            _id,
            doorNumber : dNo,
            landmark : lMark, 
            area : areaName , 
            street : str, 
            pincode : pin , 
            city : cityName, 
            state : stateName, 
            handleToggle,
            formSubmit
        } = props

    const [doorNumber, setDoorNumber] = useState(dNo ? dNo : '')
    const [landmark, setLandmark] = useState(lMark ? lMark : '')
    const [area, setArea] = useState(areaName ? areaName : '')
    const [street, setStreet] = useState(str ? str : '')
    const [pincode, setPincode] = useState(pin ? pin : '')
    const [city, setCity] = useState(cityName ? cityName : '')
    const [state, setState] = useState(stateName ? stateName : '')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const redFontColor = { color : 'red'}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'doorNumber'){
            setDoorNumber(e.target.value.trim())
        } else  if(name === 'landmark'){
            setLandmark(e.target.value)
        } else  if(name === 'area'){
            setArea(e.target.value)
        } else  if(name === 'street'){
            setStreet(e.target.value)
        } else  if(name === 'pincode'){
            setPincode(e.target.value.trim())
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
            errors.field = "* fields are required"
        } else if(pincode.length > 6 || pincode.length < 6) {
            errors.field = "Invalid Pincode"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                doorNumber,
                landmark : landmark.trim(),
                area : area.trim(),
                street : street.trim(),
                city : city.trim(),
                state : state.trim(),
                pincode
            }

            const clearForm = () => {
                setDoorNumber('')
                setLandmark('')
                setArea('')
                setStreet('')
                setCity('')
                setState('')
                setPincode('')
            }

            formSubmit(formData, clearForm, _id)
        } else {
            setFormErrors(errors)
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
                <p style={redFontColor}>{formErrors.field && formErrors.field}</p>
                <input 
                    type="submit"
                    value="Save Address"
                />
            </form>
        </div>
    )
}

export default AddressForm