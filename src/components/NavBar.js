import React from 'react'
import { Link, Route } from 'react-router-dom'
import Register from './authentication/Register'

import Home from './Home'

const NavBar = (props) => {
  return (
    <div>
        { localStorage.getItem('token') ? (
                <div>
                    <Link to="/user/services"><span>Services</span></Link>
                    <Link to="/user/account"><span>Account</span></Link>
                    <Link to="/user/settings"><span>Settings</span></Link>
                </div>
            ) : (
                <div>
                    <Link to="/home"><span>Home</span></Link>
                    <Link to="/user/register"><span>Register</span></Link>
                    <Link to="/user/login"><span>Login</span></Link>
                </div>
            )
        }

        <Route path="/home" component={Home} exact/>
        <Route path="/user/register" component={Register} exact/>
    </div>
  )
}

export default NavBar