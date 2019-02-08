import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actions/contacts'

const INITIAL_STATE = { list: [] }

const addContact = (({ list, contact }) => list.concat(contact))

const updateContact = ({ list, contact }) => {
    const contacts = list.filter(c => c.id !== contact.id)
    return contacts.concat(contact)
}

const deleteContact = (({ list, id }) => list.filter(c => c.id !== id))

export default function contacts (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_CONTACT: {
            return {
                ...state,
                list: addContact({
                    ...state,
                    ...action
                })
            }
        }
        case UPDATE_CONTACT: {
            return {
                ...state, 
                list: updateContact({
                    ...state,
                    ...action
                })
            }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                list: deleteContact({
                    ...state,
                    ...action
                })
            }
        }
        default:
            return state
    }
}