import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { startGetAddresses } from '../actions/addressesAction'

import AddressItem from './AddressItem'

const Addresses = (props) => {

  const dispatch = useDispatch()

  const { addresses } = useSelector((state)=> {
    return state
  })

  useEffect(()=>{
    dispatch(startGetAddresses())
  },[])

  return (
    <div>
        <h2>Your Addresses - {addresses.length}</h2>
        <form>
          {addresses.map( address => {
            return <AddressItem 
              key = {address._id}
              {...address}
            />
          })}
        </form>
    </div>
  )
}

export default Addresses