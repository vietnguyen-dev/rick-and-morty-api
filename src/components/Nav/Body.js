import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Characters from '../Pages/Characters';
import Episodes from '../Pages/Episodes'
import Locations from '../Pages/Locations'
import './Body.css'

const Body = () => {
    return (
      <Router>
        <nav className="navBack">
          <ul className="navBar">
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/characters" className="navLink">
                Characters
              </Link>
            </li>
            <li>
              <Link to="/locations" className="navLink">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/episodes" className="navLink">
                Episodes
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
}

export default Body
