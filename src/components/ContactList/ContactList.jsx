import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';


function ContactList({ children }) {
  return <List>{children}</List>;
}

export default ContactList;

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};


