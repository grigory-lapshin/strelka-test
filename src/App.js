import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </Container>
  );
}

export default App;
