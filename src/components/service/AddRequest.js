import React from "react"
import { useDispatch } from "react-redux"

import { startPostRequest } from "../../actions/serviceRequestActions"

import RequestForm from "./RequestForm"

const AddRequest = (props) => {
    const dispatch = useDispatch()

    const formSubmit = (formData, clearAndRedirect) => {
        dispatch(startPostRequest(formData, clearAndRedirect))
    }

    return (
        <div>
            <h3>Add a Service Request and get Proposals from experienced Professionals!</h3>
            <RequestForm 
                formSubmit = {formSubmit}
            />
        </div>
    )
}

export default AddRequest