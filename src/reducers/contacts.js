import { ADD_CONTACT } from '../actions/contacts'

export default function contacts (state = [], action) {
    switch(action.type) {
        case ADD_CONTACT: {
            return [
                ...state,
                action.contact
            ]
        }
        default:
            return state
    }
}