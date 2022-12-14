import React from 'react'
import { Route } from 'react-router-dom'

import Register from './authentication/Register'
import Login from './authentication/Login'
import Home from './Home'
import Addresses from './Addresses'

const Body = () => {
  return (
    <div>
        <Route path="/home" component={Home} exact/>
        <Route path="/user/register" component={Register} exact/>
        <Route path="/user/login" component={Login} exact/>
        <Route path="/user/addresses" component={Addresses} exact/>
    </div>
  )
}

export default Body