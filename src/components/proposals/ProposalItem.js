import React, { useState } from "react"

const ProposalItem = (props) => {
    const {_id, amount, date, professional} = props
    return (
        <div>
            <p>Proposed by - {professional}</p>
            <b>Amount - Rs. {amount}</b>
            <span>Proposed Date - {date.slice(0,10)}</span>
        </div>
    )
}

export default ProposalItem