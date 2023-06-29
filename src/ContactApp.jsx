import React, {useState} from 'react';
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import {useLocalStorage} from "./hooks/useLocalStorage.js";
import {v4 as uuid} from 'uuid';

const ContactApp = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [defaultList, {set}] = useLocalStorage('contactList')
  const [contactList, setContactList] = useState(defaultList || []);

  const handleContactAdd = ({name, phone, email}) => {
    const newContact = {
      id: uuid(),
      name: name.trim(),
      email,
      phone
    }
    const newContactList = [...contactList, newContact];
    setContactList(newContactList);
    set('contactList', newContactList);
  }

  const handleContactDelete = (contactId) => {
    const newContactList = contactList.filter(({id}) => id !== contactId);
    setContactList(newContactList);
    set('contactList', newContactList);
  }

  const handleSearch = (searchStr) => {
    setSearchTerm(searchStr);
  }

  return (
      <div className="container">
        <div className="flex justify-center">
          <ContactForm
              onContactAdd={handleContactAdd}
              onSearch={handleSearch}
              searchTerm={searchTerm}
          />
        </div>
        <div className="flex justify-center contact-list">
          <ContactList
              list={contactList}
              searchTerm={searchTerm}
              handleDelete={handleContactDelete}
          />
        </div>
      </div>
  );
};

export default ContactApp;