import React from 'react';
import { connect } from 'react-redux'

function ContactsList({ dispatch, contact }) {
    return (
        <div>
            <p>{contact.name}</p>
        </div>
    );
}

const mapStateToProps = ({ contacts }, { id: contactId }) => {
    const contact = contacts.find(({ id }) => id === contactId)
    return {
        contact
    }
};

export default connect(mapStateToProps)(ContactsList)