import React from 'react'
import { useDispatch } from 'react-redux'

import { startDeleteAddress } from '../actions/addressesAction'

const AddressItem = (props) => {
    const {_id, doorNumber, landmark, area, street, city, state} = props

    const dispatch = useDispatch()

  return (
    <div>
        <input type="radio" name='default'/>
        <span>{doorNumber}, {landmark}, {area}, {street}, {city}, {state}</span>
        <button>Edit</button>
        <button onClick={()=>{
            dispatch(startDeleteAddress(_id))
        }}>Delete</button>
    </div>
  )
}

export default AddressItem