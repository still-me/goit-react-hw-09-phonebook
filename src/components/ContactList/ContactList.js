import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import './ContactList.scss';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { removeContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    id => {
      dispatch(removeContact(id));
    },
    [dispatch],
  );

  return (
    <ListGroup className="contacts-list">
      {contacts.map(({ id, name, number }) => (
        <ListGroupItem className="contacts-list__item" key={id}>
          <p className="contacts-list__info">
            {name}: {number}
          </p>
          <button
            className="contacts-list__button--delete"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            <span>Delete</span> <DeleteIcon className="delete-icon" />
          </button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ContactList;
