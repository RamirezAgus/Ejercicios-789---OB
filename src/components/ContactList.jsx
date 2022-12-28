import React, { useState } from 'react';
import Contact from './Contact';

const ContactList = () => {

const [contacts, setContacts] = useState (
    [
        {
            name: 'Agustin',
            connected: false
        },
        {
            name: 'Patricia',
            connected: false
        },
        {
            name: 'Lucas',
            connected: false
        },
        {
            name: 'Alfoncina',
            connected: false
        }
    ]
);


const [inputValue, setInputValue] = useState("");

const createContact = (e) => {
    e.preventDefault();
    const newContactList = [...contacts, {name: inputValue, connected: false}]
    setContacts(newContactList)
};

const deleteContact = (index) => {
    const newContactList = [...contacts]
    newContactList.splice(index, 1)
    setContacts(newContactList)
};

const toggleContactStatus = (index) => {
    const newContactList = [...contacts]
    !newContactList[index].connected ? 
    (newContactList[index].connected = true) :
    (newContactList[index].connected = false)
    setContacts(newContactList)
};

    return (
        <div>
            <form onSubmit={createContact}>
                <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Añadir contacto'/>
                <button>Enviar</button>
            </form>
            {
                contacts.map((contact, index) => (
                    <Contact key={index} index={index} contact={contact} deleteContact={deleteContact} toggleContactStatus={toggleContactStatus} />
                ))
            }
        </div>
    );
}

export default ContactList;
