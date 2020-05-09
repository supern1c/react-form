import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from './components/signup.component';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Nico</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-primary" to={"/"}>Sign in</Link>
              </li>
            </ul>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>


      <div className="footer bg-light bottom">
        <p>&copy; 2020 Nico Ari Novriantoro</p>
      </div>
    </div>
  </Router>
  );
}

export default App;
