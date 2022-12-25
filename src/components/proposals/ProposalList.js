import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetCustomerProposals } from "../../actions/proposalActions"

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
            Total Proposals - {proposals.length}
        </div>
    )
}

export default ProposalList