import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './ContactForm.scss';
import '../../styles/transition/warning.scss';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

const ContactForm = ({ onSave }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const [number, setNumber] = useState('');
  const handleNumberChange = ({ target: { value } }) => {
    setNumber(value);
  };

  const [repeatedContact, setRepeatedContact] = useState(null);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = useCallback(
    e => {
      e.preventDefault();
      const includesContact = contacts.find(contact => contact.name === name);

      if (!includesContact) {
        dispatch(addContact(name, number));
        reset();
        onSave();
        if (repeatedContact) {
          setRepeatedContact(null);
        }
        return;
      }
      setRepeatedContact(includesContact.name);
    },
    [contacts, dispatch, name, number, repeatedContact, onSave],
  );

  return (
    <form className="contacts-form" onSubmit={handelSubmit}>
      <label className="contacts-form__label">
        Name
        <input
          className="contacts-form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="contacts-form__label">
        Number
        <input
          className="contacts-form__input last-el"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className="contacts-form__button" type="submit">
        Add contact
      </button>
      <CSSTransition
        in={Boolean(repeatedContact)}
        timeout={200}
        classNames="warn"
        unmountOnExit
      >
        <p className="contacts-form__repeated-contact">
          {repeatedContact} is already in your contacts
        </p>
      </CSSTransition>
    </form>
  );
};

export default ContactForm;
