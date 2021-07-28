import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { BounceInLeftDiv } from '../../utils/animatedComponents';

import './LoginView.scss';
import '../../styles/transition/warning.scss';
import { logIn, removeError } from '../../redux/auth/auth-operations';
import { getIsError } from 'redux/auth/auth-selectors';
import Section from '../../components/Section';
import routes from '../../utils/routes';

const LoginView = () => {
  const isError = useSelector(getIsError);
  const dispatch = useDispatch();

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

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  const onRemoveError = useCallback(() => {
    dispatch(removeError());
  }, [dispatch]);

  return (
    <Section>
      <CSSTransition in={isError} timeout={200} classNames="warn" unmountOnExit>
        <Alert
          dismissible
          variant="info"
          onClose={onRemoveError}
          className="login__alert"
        >
          <Alert.Heading>Something with entered data</Alert.Heading>
          <p>Please check:</p>
          <p>- your password length minimum 7 symbols</p>
          <p>- email format is name@example.com</p>
          <p>
            - or you can try to{' '}
            {
              <Link className="login__link" to={routes.register}>
                Sign Up
              </Link>
            }
          </p>
        </Alert>
      </CSSTransition>
      <BounceInLeftDiv>
        <Form onSubmit={handleSubmit} className="login__form">
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
          <Button className="login__button" type="submit">
            Log In
          </Button>
          <div className="login__wrapper">
            <p>Don't have an account?</p>
            <Link className="login__link" to={routes.register}>
              Sign Up
            </Link>
          </div>
        </Form>
      </BounceInLeftDiv>
    </Section>
  );
};

export default LoginView;
