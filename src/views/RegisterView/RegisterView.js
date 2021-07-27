import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './RegisterView.scss';
import { register, removeError } from '../../redux/auth/auth-operations';
import { getIsError } from 'redux/auth/auth-selectors';
import Section from '../../components/Section';
import fadeTransition from '../../styles/transition/fade.module.css';

const RegisterView = () => {
  const isError = useSelector(getIsError);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handelNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const [email, setEmail] = useState('');
  const handelEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const [password, setPassword] = useState('');
  const handelPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  useEffect(() => {
    dispatch(removeError());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, password, email }));

    setName('');
    setEmail('');
    setPassword('');
  };

  const onRemoveError = useCallback(() => {
    dispatch(removeError());
  }, [dispatch]);

  return (
    <Section>
      <CSSTransition
        in={isError}
        timeout={200}
        classNames={fadeTransition}
        unmountOnExit
      >
        <Alert
          dismissible
          variant="info"
          onClose={onRemoveError}
          className="register__alert"
        >
          <Alert.Heading>Something with entered data</Alert.Heading>
          <p>Please check:</p>
          <p>-your password length minimum 7 symbols</p>
          <p>-email format is name@example.com</p>
          <p>-your email hasn't been registered in phonebook yet</p>
        </Alert>
      </CSSTransition>

      <Form onSubmit={handleSubmit} className="register__form">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handelEmailChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            aria-describedby="passwordHelpBlock"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handelPasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must minimum 7 characters long.
          </Form.Text>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea"
          label="Name"
          className="mb-3"
        >
          <Form.Control
            name="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={handelNameChange}
          />
        </FloatingLabel>

        <Button className="register__button" type="submit">
          Sign Up
        </Button>
      </Form>
    </Section>
  );
};

export default RegisterView;
