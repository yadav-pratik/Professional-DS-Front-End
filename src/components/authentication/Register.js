import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { isEmail, isMobilePhone } from 'validator'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [mobile, setMobile] = useState('')
    const [professional, setProfessional] = useState(false)
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'fullName'){
            setFullName(e.target.value)
        } else if(name === 'email'){
            setEmail(e.target.value.trim())
        } else if(name === 'password'){
            setPassword(e.target.value.trim())
        } else if(name === 'password2'){
            setPassword2(e.target.value.trim())
        } else if(name === 'mobile'){
            setMobile(e.target.value.trim())
        } else if(name === 'professional'){
            setProfessional(e.target.checked)
        }
    }

    const runValidations = () => {
        // Name validations
        // if(fullName.trim().length === 0) {
        //     errors.fullName = "Name cannot be empty"
        // } else if(!fullName.trim().includes(' ')){
        //     errors.fullName = "You should enter your full name"
        // }

        //Email validations
        if(email.length === 0){
            errors.email = "Email cannot be empty"
        } else if(!isEmail(email)){
            errors.email = "Invalid email format"
        }

        //Password validations
        if(password.length === 0){
            errors.password = "Password cannot be empty"
        } else if(password.length < 8 || password.length > 128){
            errors.password = "Password should be between 8 and 128 characters"
        } else if(password !== password2){
            errors.password2 = "Passwords do not match"
        }

        //Mobile validations
        if(mobile.length === 0){
            errors.mobile = "Mobile Number cannot be empty"
        } else if( !isMobilePhone(mobile) ){
            errors.mobile = "Invalid Mobile Number"
        } else if( mobile.length !== 10 ){
            errors.mobile = "Invalid Mobile Number"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                // name : fullName.trim(),
                email, password, mobile,
                role : professional ? 'professional' : 'customer'
            }
            console.log(formData)
        } else {
            setFormErrors(errors)
        }
    }

  return (
    <div>
        <h2>Register with us</h2>
        <form onSubmit={handleSubmit}>
            {/* <label>Enter your Name</label> 
            <br/>
            <input 
                type="text" 
                value={fullName} 
                onChange={handleChange}
                name="fullName"
            />
            <br/>
            {formErrors.fullName ? <p>{formErrors.fullName}</p> : <><br/><br/></>} */}
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
            <label>Confirm Password</label> 
            <br/>
            <input 
                type="password" 
                value={password2} 
                onChange={handleChange}
                name="password2"
            />
            {formErrors.password2 ? <p>{formErrors.password2}</p> : <><br/><br/></>}
            <label>Enter Mobile No.</label> 
            <br/>
            <input 
                type="text" 
                value={mobile} 
                onChange={handleChange}
                name="mobile"
            />
            {formErrors.mobile ? <p>{formErrors.mobile}</p> : <><br/><br/></>}
            <input 
                type="checkbox" 
                checked={professional} 
                onChange={handleChange}
                name="professional"
                id="professional"
            />
            <label htmlFor='professional'>Register as Professional</label> 
            <br/><br/>
            <input
                type="submit"
                value="Register"
            />
        </form>
        <p>Already a user? <Link to="/user/login">Login</Link></p>
    </div>
  )
}

export default Register     