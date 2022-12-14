import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

const Addresses = (props) => {

  const dispatch = useDispatch()

  const { addresses } = useSelector((state)=> {
    return state
  })

  return (
    <div>
        <h2>Your Addresses - {addresses.length}</h2>
        {addresses.map( address => {
          return <div>
          </div>
        })}
    </div>
  )
}

export default Addresses