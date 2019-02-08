import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contacts'
import { generateId } from '../utils/helpers'

function NewUser(props) {
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        const { value: name } = e.target
        setName(name)
    }

    const addUser = () => {
      const { dispatch } = props
  
      const contact = {
        id: generateId(),
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