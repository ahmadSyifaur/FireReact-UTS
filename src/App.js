import React from 'react';
import logo from './assets/image/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import Register from './containers/register';
import product from './containers/product';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import {store} from './config/redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" exact component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/product" component={product} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
