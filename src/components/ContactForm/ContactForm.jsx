import React, {Component} from 'react';
import { Form, FormData, FormLabel, FormInput, AddBtn } from './ContactForm.styled'; 
import PropTypes from 'prop-types';

class ContactForm extends Component { 

  state = {
    name: '',
    number: '',
  };

  onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onSubmitForm}>
        <FormData>
          <FormLabel>
            Name
            <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </FormLabel>
        
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={this.onChangeInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
        </FormData>

        <AddBtn type="submit">
          Add contact
        </AddBtn>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

