import React from 'react'
import { Route } from 'react-router-dom'

import Register from './authentication/Register'
import Login from './authentication/Login'
import Home from './Home'

const Body = () => {
  return (
    <div>
        <Route path="/home" component={Home} exact/>
        <Route path="/user/register" component={Register} exact/>
        <Route path="/user/login" component={Login} exact/>
    </div>
  )
}

export default Body