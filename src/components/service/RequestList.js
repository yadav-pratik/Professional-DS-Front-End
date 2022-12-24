import React from "react"
import { useSelector } from "react-redux"
import RequestItem from "./RequestItem"

const RequestList = (props) => {
    const serviceRequests = useSelector((state) => {
        return state.serviceRequests
    })
    return (
        <div>
            {serviceRequests.map(request => {
                return <RequestItem 
                    key={request._id}
                    {...request}
                />
            })}
        </div>
    )
}

export default RequestList