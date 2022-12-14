import React from 'react'

const AddressItem = (props) => {
    const { doorNumber, landmark, area, street, city, state} = props
  return (
    <div>
        <input type="radio" name='default'/>
        <span>{doorNumber}, {landmark}, {area}, {street}, {city}, {state}</span>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default AddressItem