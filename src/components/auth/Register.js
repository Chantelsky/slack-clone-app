import React, { useState } from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

const Register = () => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isFormValid = () => {
    let errors = [];
    let error;

    if (isFormEmpty()) {
      error = { message: 'Fill in all fields' };
      setError({ errors: errors.concat(error) });
      return false;
    } else if (!isPasswordValid()) {
      error = { message: 'Password is invalid' };
      setError({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  const isPasswordValid = (props) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const displayErrors = (errors) => {
    errors.map((error, i) => <p key={i}>{error.message}</p>);
  };

  const isFormEmpty = (props) => {
    return (
      !userName.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  const handleSubmit = (e) => {
    if (isFormValid()) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
          console.log(createdUser);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h3" icon color="black" textAlign="center">
          <Icon name="code" color="black" />
          Register for DevChat
        </Header>
        <Form onSubmit={handleSubmit} size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              type="text"
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Form.Input
              fluid
              icon="repeat"
              iconPosition="left"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
            <Button color="black" fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>

        {error.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {displayErrors(error)}
          </Message>
        )}

        <Message>
          Already a user? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
