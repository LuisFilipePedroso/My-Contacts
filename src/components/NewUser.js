import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contacts'
import { generateId } from '../utils/helpers'

function NewUser(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (e) => {
        const { value: name } = e.target
        setName(name)
    }

    const handleEmailChange = (e) => {
        const { value: email } = e.target
        setEmail(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = props

        const contact = {
            id: generateId(),
            name,
            email
        }
        dispatch(addContact(contact))
        setName('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    required
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Name"
                    className="input" />
                <input
                    type="email"
                    name="email"
                    required
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Email"
                    className="input" />
                <button 
                    type="submit"
                    className="btn btn-success">Save</button>
            </form>
        </div>
    );
}

export default connect()(NewUser)