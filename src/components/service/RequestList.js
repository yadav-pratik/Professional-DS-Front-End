import React from "react"
import { useSelector } from "react-redux"
import RequestItem from "./RequestItem"

const RequestList = (props) => {
    const serviceRequests = useSelector((state) => {
        return state.serviceRequests
    })
    return (
        <div>
            { serviceRequests.length === 0 ? (
                    <div>
                        <h4>Oops! There is nothing to show here.</h4>
                        <p>Either reload the page or select another option.</p>
                    </div>
                ) : (
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
        </div>
    )
}

export default RequestList