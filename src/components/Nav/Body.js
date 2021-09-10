import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Characters from '../Pages/Characters';
import Episodes from '../Pages/Episodes'
import Locations from '../Pages/Locations'

const Body = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/characters">Characters</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/episodes">Episodes</Link>
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
        </div>
      </Router>
    );
}

export default Body
