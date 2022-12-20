import React from "react"
import { Link, Route } from "react-router-dom"

import AddRequest from "./AddRequest"
import AllRequests from "./AllRequests"

const Services = (props) => {
    return (
        <div>
            <h2>Services Page</h2>
            <span><Link to="/user/services/add-request">Add New Request</Link></span>
            <span><Link to="/user/services/all-requests">Your Requests</Link></span>

            <Route path="/user/services/add-request" component={AddRequest} />
            <Route path="/user/services/all-requests" component={AllRequests} /> 

        </div>
    )
}

export default Services