import React from "react"
import { Link, Route } from "react-router-dom"

const Services = (props) => {
    return (
        <div>
            <h2>Services Page</h2>
            <span><Link to="/user/services/add-request">Add Service Request</Link></span>
            <span><Link to="/user/services/past-requests">Your Past Requests</Link></span>


        </div>
    )
}

export default Services