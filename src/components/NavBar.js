import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
        { localStorage.getItem('token') ? (
                <div>
                    <Link to="/user/services"><span>Services</span></Link>
                    <Link to="/user/profile"><span>Profile</span></Link>
                    <Link to="/user/addresses"><span>Addresses</span></Link>
                </div>
            ) : (
                <div>
                    <Link to="/home"><span>Home</span></Link>
                    <Link to="/user/register"><span>Register</span></Link>
                    <Link to="/user/login"><span>Login</span></Link>
                </div>
            )
        }
    </div>
  )
}

export default NavBar