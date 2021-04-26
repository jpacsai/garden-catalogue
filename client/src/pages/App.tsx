import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Icon,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

import Plants from "./plants/Plants";
import Collections from "./collections/Collections";
import Home from "./home/Home";

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <NavbarGroup style={{ width: "100% "}}>
            <NavbarGroup className="nav-pages-group">
              <NavbarHeading className="page-title">
                <Link to="/">Garden Catalogue</Link>
              </NavbarHeading>
              <Link className="icon-link" to="/plants">
                <Icon icon="tree" />
                Plants
              </Link>
              <Link className="icon-link" to="/collections">
                <Icon icon="briefcase" />
                Collections
              </Link>
            </NavbarGroup>

            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="user" />
            <Button className={Classes.MINIMAL} icon="cog" />
          </NavbarGroup>
        </Navbar>

        <Switch>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
