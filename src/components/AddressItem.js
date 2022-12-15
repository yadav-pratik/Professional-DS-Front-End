import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { startDeleteAddress, startUpdateAddress } from '../actions/addressesAction'
import AddressForm from './AddressForm'

const AddressItem = (props) => {
    const {_id, doorNumber, landmark, area, street, city, state, pincode} = props

    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = () => {
      dispatch(startDeleteAddress(_id))
    }

    const handleToggle = () => {
      setToggle(!toggle)
    }

    const formSubmit = (formData, clearForm, _id) => {
      dispatch(startUpdateAddress(formData, clearForm, _id))
    }

  return (
    <div>
      {!toggle ? (
          <div>
          <input type="radio" name='default'/>
          <span>
            {doorNumber + ', '}
            {landmark && landmark + ', '}
            {area + ', '}
            {street && street + ', '}
            {city + ', '}
            {state + ' - '}
            {pincode}
          </span>
          <button onClick={handleToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        ) : (
          <div>
            <AddressForm 
              _id={_id}
              doorNumber={doorNumber}
              landmark={landmark}
              area={area}
              street={street}
              city={city}
              state={state}
              pincode={pincode}
              handleToggle={handleToggle}
              formSubmit={formSubmit}
            />
            <button onClick={handleToggle}>cancel</button>
          </div>
        )
      }
    </div>
  )
}

export default AddressItem