import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { startGetAddresses, startCreateAddress } from '../actions/addressesAction'

import AddressForm from './AddressForm'
import AddressItem from './AddressItem'

const Addresses = (props) => {

  const dispatch = useDispatch()

  const { addresses } = useSelector((state)=> {
    return state
  })

  useEffect(()=>{
    dispatch(startGetAddresses())
  },[dispatch])

  const formSubmit = (formData, clearForm) => {
    dispatch(startCreateAddress(formData, clearForm))
  }

  return (
    <div>
      <h2>Your Addresses - {addresses.length}</h2>
      {addresses.map( address => {
        return <AddressItem 
          key = {address._id}
          {...address}
        />
      })}
      <AddressForm 
        formSubmit={formSubmit}
      />
    </div>
  )
}

export default Addresses