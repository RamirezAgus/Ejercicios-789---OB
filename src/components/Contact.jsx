import React from 'react';

const Contact = ({ contact, index, deleteContact, toggleContactStatus }) => {

const showConnectionStatus = (contactStatus) => {
    return (
        !contactStatus ? ('Offline') : ('Online')
            )
};


    return (
        <div>
            <li>{contact.name}</li>
            <button onClick={() => deleteContact(index)}>Delete</button>
            <button onClick={() => toggleContactStatus(index)}>{showConnectionStatus(contact.connected)}</button>
        </div>
    );
}

export default Contact;
