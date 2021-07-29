import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './ContactsView.scss';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Modal from '../../components/Modal';
import { ReactComponent as AddIcon } from '../../images/add-contact.svg';
import { fetchContactsRequest } from '../../redux/contacts/contacts-operations';

const ContactsView = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContactsRequest());
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <Section>
      <div className="contacts-wrapper">
        <button
          className="contacts__button--add"
          type="button"
          onClick={toggleModal}
        >
          <span>Add new contact</span> <AddIcon className="icon-add" />
        </button>
        <div className="contacts__list-container">
          <Filter />
          <ContactList />
        </div>

        {showModal && <div className="backdrop-dark"></div>}

        <CSSTransition
          in={showModal}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <Modal onClose={toggleModal}>
            <div className="contacts__add-container">
              <p className="contacts__add-hint">
                Enter name and phone number to add a new contact
              </p>
              <ContactForm onSave={toggleModal} />
            </div>
          </Modal>
        </CSSTransition>
      </div>
    </Section>
  );
};

export default ContactsView;
