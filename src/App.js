import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from './content/home';

function App() {
  return (
    <Router>
      <Container className="App">
        <HomePage />
      </Container>
    </Router>
  );
}

export default App;
