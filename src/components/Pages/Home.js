import React from 'react'
import '../UI/Page'
import Page from '../UI/Page';

const Home = () => {
    return (
      <Page>
        <h1>Welcome to the Rick and Morty Universe!</h1>
        <p>Learn about Characters Episodes and Locations.</p>
        <p>
          This project was made using React, React Router, and the{" "}
          <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
        </p>
      </Page>
    );
}

export default Home
