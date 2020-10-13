import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Landing } from './sections/landing';
import {BrowserRouter as Router} from 'react-router-dom';
import { Grommet } from 'grommet';
import { NavSwitch } from './router/Router';
import { theme } from './style/theme';
import { Nav } from './components/nav';

function App() {
  return (
    <Grommet className="App" theme={theme}>
      <Router>
        <Nav/>
        <NavSwitch/>
      </Router>
    </Grommet>
  );
}

export default App;
