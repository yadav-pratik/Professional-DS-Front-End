import React, {useState} from 'react'
import { isEmail } from 'validator'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { startLoginUser } from '../../actions/userActions'
import { toggleIsLogged } from '../../actions/isLoggedAction'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'email'){
            setEmail(e.target.value.trim())
        } else if(name === 'password'){
            setPassword(e.target.value.trim())
        }
    }

    const runValidations = () => {
        //Email validations
        if(email.length === 0){
            errors.email = "Email cannot be empty"
        } else if(!isEmail(email)){
            errors.email = "Invalid email format"
        }

        //Password validations
        if(password.length === 0){
            errors.password = "Password cannot be empty"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                email, password
            }

            const clearAndRedirect = (target) => {
                setEmail('')
                setPassword('')
                dispatch(toggleIsLogged())
                props.history.push(`/user/${target}`)
            }
            dispatch(startLoginUser(formData, clearAndRedirect))
        } else {
            setFormErrors(errors)
        }
    }
  return (
    <div>
        <h2>Login to your Account</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter your Email</label> 
            <br/>
            <input 
                type="text" 
                value={email} 
                onChange={handleChange}
                name="email"
            />
            {formErrors.email ? <p>{formErrors.email}</p> : <><br/><br/></>}
            <label>Enter a Password</label> 
            <br/>
            <input 
                type="password" 
                value={password} 
                onChange={handleChange}
                name="password"
            />
            {formErrors.password ? <p>{formErrors.password}</p> : <><br/><br/></>}
            <input
                type="submit"
                value="Login"
            />
        </form>
        <p>New here? <Link to="/user/register">Register</Link> first</p>
    </div>
  )
}

export default Login