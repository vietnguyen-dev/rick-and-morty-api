import React from 'react'
import '../UI/Page'
import Page from '../UI/Page';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from '../Pages/Characters';
import Episodes from '../Pages/Episodes'
import Locations from '../Pages/Locations'
import './Home.css'

const Home = () => {
    return (
      <Page>
        <h1>Welcome to the Rick and Morty Universe!</h1>
        <p>
          This project was made using React, React Router, Redux, and the{" "}
          <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
        </p>
        <p>Learn about:</p>

        <div>
          <ul className='homePageLinks'>
            <li>
              <Link to="/characters" >
                Characters
              </Link>
            </li>
            <li>
              <Link to="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/episodes">
                Episodes
              </Link>
            </li>
          </ul>
        </div>

        <p>Hosted on Netlify</p>
        <Router>
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
          </Switch>
        </Router>
      </Page>
    );
}

export default Home
