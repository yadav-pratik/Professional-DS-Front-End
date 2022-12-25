import React, { useState } from "react"
import { useSelector } from "react-redux"

const ProposalItem = (props) => {
    const {_id, amount, date, professional, status} = props

    const user = useSelector((state) => {
        return state.user
    })

    return (
        <div style={{borderWidth : '2px', borderColor : 'black', borderStyle : 'solid'}}>
            <p>Proposed by - {professional.name}</p>
            <b>Amount - Rs. {amount}</b>
            <span>Proposed Date - {date.slice(0,10)}</span>
            {user.role === 'customer' ? (
                    <div>
                        {status === 'pending' ? (
                                <p>{'Status - '} 
                                    <button>Accept</button>
                                    <button>Reject</button>
                                </p>
                            ) : (
                                <p>Status - {status.charAt(0).toUpperCase() + status.slice(1)}</p>
                            )
                        } 
                    </div>
                ) : (
                    <div>
                        control for professional
                    </div>
                )
            }
        </div>
    )
}

export default ProposalItem