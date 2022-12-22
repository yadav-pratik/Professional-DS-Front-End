import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import swal from 'sweetalert'

import { startGetAddresses, startCreateAddress } from '../../actions/addressesAction'
import { startGetUser } from '../../actions/userActions'

import AddressForm from './AddressForm'
import AddressItem from './AddressItem'

const Addresses = (props) => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(startGetAddresses())
    dispatch(startGetUser())
  },[dispatch])

  const { addresses, user } = useSelector((state)=> {
    return state
  })

  if(user.hasOwnProperty('loginCount') && user.loginCount === 1 && addresses.length === 0){
    swal({
      title:"Welcome Aboard User!",
      text: user.role === 'customer' ? (
          "Add your first Address and start posting Service Requests"
        ) : (
          "Add your Address and start seeing Service Requests from your city!!"
        )
    })
  }
  
  const formSubmit = (formData, clearForm) => {
    dispatch(startCreateAddress(formData, clearForm))
  }

  return (
    <div>
      <h2>Your Addresses - {addresses.length}</h2>
      { addresses.length ? (
        addresses.map( address => {
            return <AddressItem 
              key = {address._id}
              {...address}
            />
          })
        ) : (
          <h4>You dont have any Addresses Added to your account. Add one and get Started!</h4>
        )
      }
      
      <AddressForm 
        formSubmit={formSubmit}
      />
    </div>
  )
}

export default Addresses