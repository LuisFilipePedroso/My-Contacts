import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contacts'

function NewUser(props) {
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        const { value } = e.target
        setName(() => value)
    }

    const addUser = () => {
      const { dispatch } = props
  
      const contact = {
        name: name
      }
      dispatch(addContact(contact))
      setName(() => '')
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                required
                onChange={handleInputChange}
                value={name} />
            <button onClick={addUser}>Save</button>
        </div>
    );
}

export default connect()(NewUser)