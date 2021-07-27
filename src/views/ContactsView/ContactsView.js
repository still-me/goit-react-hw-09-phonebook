import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './ContactsView.scss';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { fetchContactsRequest } from '../../redux/contacts/contacts-operations';

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsRequest());
  }, [dispatch]);

  return (
    <Section>
      <div className="contacts-wrapper">
        <div className="contacts__add-container">
          <p className="contacts__add-hint">
            Enter name and phone number to add a new contact
          </p>
          <ContactForm />
        </div>
        <div className="contacts__list-container">
          <Filter />
          <ContactList />
        </div>
      </div>
    </Section>
  );
};

export default ContactsView;
