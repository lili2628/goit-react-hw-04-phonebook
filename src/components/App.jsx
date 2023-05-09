import React, { useState, useEffect, memo } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle, ContactContainer } from './App.styled';

function App() { 
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');
    

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
      
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contact`);
    } else {
      setContacts(prevContacts => ([contact, ...prevContacts]));
    };
  };
  
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <ContactContainer>
        <SubTitle>Contacts ({contacts.length})</SubTitle>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList>
          <ContactItem contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
        </ContactList>
      </ContactContainer>
    </Container>
  );
}


export default memo(App);


