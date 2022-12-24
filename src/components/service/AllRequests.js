import React, { useState, useEffect } from "react"

const AllRequests = (props) => {
    const [status, setStatus] = useState('all')

    const statusType = ['added', 'alloted', 'completed']

    useEffect(()=>{
        
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