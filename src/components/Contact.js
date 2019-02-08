import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { updateContact, deleteContact } from '../actions/contacts'

import { TiPencil } from "react-icons/ti"
import { TiTrash } from "react-icons/ti"

function ContactsList({ dispatch, contact }) {
    const [id] = useState(contact.id)
    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedContact = {
            id,
            name,
            email
        }
        dispatch(updateContact(updatedContact))
    }

    const handleDeleteContact = () => {
        dispatch(deleteContact(id))   
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="d-flex flex-direction-column contact-column-size">
                        <input
                            type="name"
                            name="contactname"
                            value={name}
                            className="input update-input"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="d-flex flex-direction-column contact-column-size">
                        <input
                            type="email"
                            name="contactemail"
                            value={email}
                            className="input update-input"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            type="submit"
                            className="btn-icon btn-edit">
                            <TiPencil />
                        </button>
                        <button
                            type="button"
                            className="btn-icon btn-delete"
                            onClick={handleDeleteContact}>
                            <TiTrash />
                        </button>
                    </div>
                </div>
            </form>
        </div >
    );
}

const mapStateToProps = ({ contacts: { list: contacts } }, { id: contactId }) => {
    const contact = contacts.find(({ id }) => id === contactId)
    return {
        contact
    }
};

export default connect(mapStateToProps)(ContactsList)