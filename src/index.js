import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from 'react-router-dom';
import './App.css';
import firebase from './firebase';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser } from './actions';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/');
      }
    });
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

const RootWithAuth = withRouter(connect(null, { setUser })(Root));

//provider will provide global state to any component
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
