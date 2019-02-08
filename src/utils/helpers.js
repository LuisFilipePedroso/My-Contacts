const generateId = () => {
    return Math.random().toString(20).substring(2) + (new Date()).getTime().toString(20);
}

export const AddContactToDB = (contact) => {
    contact.id = generateId()
    const contacts = getContacts() || contact
    localStorage.setItem('contact', [
        JSON.stringify(contacts)
    ])
}

export const getContacts = () => localStorage.getItem('contact')