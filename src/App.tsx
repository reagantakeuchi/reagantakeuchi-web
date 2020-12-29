import React from 'react';
import './App.css';
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
