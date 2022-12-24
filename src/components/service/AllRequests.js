import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'

import { startGetRequest } from "../../actions/serviceRequestActions"

const AllRequests = (props) => {
    const [status, setStatus] = useState('all')

    const statusType = ['added', 'alloted', 'completed']

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetRequest(status))
    }, [status])

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <h3>Your Service Requests</h3>
            <form>
                <label>Filter by Status</label>
                <select
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value='all'>All</option>
                    {statusType.map((status, i)=>{
                        return <option
                            key={i}
                            value={status}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default AllRequests