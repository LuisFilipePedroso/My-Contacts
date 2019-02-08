import React from 'react';
import { connect } from 'react-redux'
import Contact from './Contact'

function ContactsList({ dispatch, contacts }) {
    return (
        <div>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    id={contact.id} />
            ))}
        </div>
    );
}

const mapStateToProps = ({ contacts }) => {
    return {
        contacts
    }
};

export default connect(mapStateToProps)(ContactsList)