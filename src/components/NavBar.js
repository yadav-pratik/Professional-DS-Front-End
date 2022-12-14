import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { toggleIsLogged } from '../actions/isLoggedAction'

import { normalAlert } from '../helper-functions/sweetalert'

const NavBar = (props) => {
    const dispatch = useDispatch()

    const isLogged = useSelector((state) => {
        return state.isLogged
    })
    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(toggleIsLogged())
        props.history.push('/')
        normalAlert('Logged Out Successfully!', 'success')
    }
  return (
    <div>
        { isLogged ? (
                <div>
                    <Link to="/user/services"><span>Services</span></Link>
                    <Link to="/user/profile"><span>Profile</span></Link>
                    <Link to="/user/addresses"><span>Addresses</span></Link>
                    <button onClick={handleLogout}>Logout</button>
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


export default withRouter(NavBar)