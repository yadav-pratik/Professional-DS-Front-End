import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import AddressItem from './AddressItem'

const Addresses = (props) => {

  const dispatch = useDispatch()

  const { addresses } = useSelector((state)=> {
    return state
  })

  return (
    <div>
        <h2>Your Addresses - {addresses.length}</h2>
        {addresses.map( address => {
          return <AddressItem 
            key = {address._id}
            {...address}
          />
        })}
    </div>
  )
}

export default Addresses