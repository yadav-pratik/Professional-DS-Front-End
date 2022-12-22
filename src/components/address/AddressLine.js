import React from "react"
import { useDispatch } from "react-redux"


const AddressLine = (props) => {
    const {
        _id, 
        doorNumber, 
        landmark, 
        area, 
        street, 
        pincode, 
        city, 
        state, 
        defaultAddress, 
        handleDefaultChange, 
        addressChange, 
        selectedAddress
    } = props

    const dispatch = useDispatch()

    const handleDefault = handleDefaultChange ? handleDefaultChange : () => {addressChange(_id)}

    return (
        <div>
            <input 
                type="radio" 
                name="address"
                checked={selectedAddress ? _id === selectedAddress : defaultAddress} 
                onChange={handleDefault}
            />
            <span>
                {doorNumber + ', '}
                {landmark && landmark + ', '}
                {area + ', '}
                {street && street + ', '}
                {city + ', '}
                {state + ' - '}
                {pincode}
            </span>
        </div>
    )
}

export default AddressLine