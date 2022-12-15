import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { startGetAddresses } from '../actions/addressesAction'
import AddressForm from './AddressForm'

import AddressItem from './AddressItem'

const Addresses = (props) => {

  const dispatch = useDispatch()

  const { addresses } = useSelector((state)=> {
    return state
  })

  useEffect(()=>{
    dispatch(startGetAddresses())
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Your Addresses - {addresses.length}</h2>
        <form onSubmit = {handleSubmit}>
          {addresses.map( address => {
            return <AddressItem 
              key = {address._id}
              {...address}
            />
          })}
        </form>
      <AddressForm />
    </div>
  )
}

export default Addresses