import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import './ContactList.scss';
import { removeContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ListGroup className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <ListGroupItem className="contacts__item" key={id}>
        <p className="contact__info">
          {name}: {number}
        </p>
        <button
          className="contact__button--delete"
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </ListGroupItem>
    ))}
  </ListGroup>
);

ContactList.defaultProps = {
  onDeleteContact: () => null,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
