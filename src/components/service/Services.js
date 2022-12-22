import React, { useEffect } from "react"
import { Link, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import AddRequest from "./AddRequest"
import AllRequests from "./AllRequests"

import { startGetAddresses } from "../../actions/addressesAction"
import { startGetUser } from "../../actions/userActions"

const Services = (props) => {

    const { user, addresses } = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startGetUser())
        dispatch(startGetAddresses())
    },[])
    return (
        <div>
            <h2>Services Page</h2>
            <span><Link to="/user/services/add-request">Add New Request</Link></span>
            <span><Link to="/user/services">Your Requests</Link></span>

            <Route path="/user/services/add-request" component={AddRequest} />
            <Route path="/user/services" component={AllRequests} exact/> 

        </div>
    )
}

export default Services