import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { startDeleteAddress } from '../actions/addressesAction'
import AddressForm from './AddressForm'

const AddressItem = (props) => {
    const {_id, doorNumber, landmark, area, street, city, state, pincode} = props

    const [toggle, handleToggle] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = () => {
      dispatch(startDeleteAddress(_id))
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
          <button >Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        ) : (
          <div>
            <AddressForm />
            <button>cancel</button>
          </div>
        )
      }
    </div>
  )
}

export default AddressItem