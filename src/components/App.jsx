import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import initialContacts from '../data/contacts.json';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle, ContactContainer } from './App.styled';

class App extends Component { 

  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) {
      this.setState({ contacts: contactsParsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (data) => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert(`${data.name} is already in contact`);
    } else {
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
      }
  }
  
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <ContactContainer>
          <SubTitle>Contacts ({contacts.length})</SubTitle>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList>
            <ContactItem contacts={visibleContacts} onDeleteContact={this.deleteContact} />
          </ContactList>
        </ContactContainer>
      </Container>
    );
  }
}

export default App;


