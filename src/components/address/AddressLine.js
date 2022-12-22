import React from "react"
import { useDispatch } from "react-redux"

import { startDefaultAddress } from "../../actions/addressesAction"

const AddressLine = (props) => {
    const {_id, doorNumber, landmark, area, street, pincode, city, state, defaultAddress} = props

    const dispatch = useDispatch()

    const handleDefaultChange = () => {
        dispatch(startDefaultAddress(_id))
      }

    return (
        <div>
            <input 
                type="radio" 
                checked={defaultAddress} 
                onChange={handleDefaultChange}
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