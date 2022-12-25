import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { startGetCustomerProposals } from "../../actions/proposalActions"
import ProposalItem from "./ProposalItem"

const ProposalList = (props) => {
    const { _id } = props

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetCustomerProposals(_id))
    },[])

    const proposals = useSelector((state)=>{
        return state.proposals
    })

    return (
        <div>
            <h4>Total Proposals - {proposals.length}</h4>
            {proposals.map(proposal => {
                return <ProposalItem
                    key={proposal._id}
                    {...proposal}
                />
            })}

        </div>
    )
}

export default ProposalList