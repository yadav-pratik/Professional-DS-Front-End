import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <h3>Pro-Services is an Online marketplace for Professional Household services.</h3>
      <h3>Need a Professional? Add a Request and get proposals from Professionals all over your city!!</h3>
      <h3>Experienced Professionals at your Doorstep!</h3>
      <h3>So What are you waiting for?? Get started Now!</h3>
      <Link to="/user/register"><button>Register Now</button></Link>
      <p>Already a User? <Link to="/user/login">Login</Link></p>
    </div>
  )
}

export default Home
