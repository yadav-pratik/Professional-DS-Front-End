import React, { useState } from "react"

const RequestForm = (props) => {
    const [expertise, setExpertise] = useState('')
    const [description, setDescription] = useState('')

    const textareaStyle = {
        height : "10vh",
        width : "30vw",
        maxHeight : '200px',
        minHeight : '60px',
        maxWidth : '500px',
        minWidth : '250px'

    }

    const expertiseType = ['plumber','electrician','carpenter','painter']

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'expertise'){
            setExpertise(e.target.value)
        } else if(name === 'description'){
            setDescription(e.target.value)
        }
    }

    return (
        <div>
            <form>
                <select value={expertise} onChange={handleChange} name="expertise">
                    <option value="">What kind of Professional you need?</option>
                    { expertiseType.map((exp, i) => {
                        return <option key={i} value={exp}>
                            {exp.charAt(0).toUpperCase() + exp.slice(1)}
                        </option>
                    })}
                </select>
                <br/><br/>
                <textarea 
                    value={description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Add a brief description about the service you need. It helps our Professionals propose with an approximate amount."
                    style={textareaStyle}
                >
                </textarea>
            </form>
        </div>
    )
}

export default RequestForm