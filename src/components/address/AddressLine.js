import React, { useEffect } from "react"
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

    useEffect(()=>{
        if(defaultAddress === true && typeof selectedAddress == 'string' && selectedAddress.length === 0){
            addressChange(_id)
        }
    },[])

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