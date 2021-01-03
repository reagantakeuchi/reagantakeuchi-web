import React, {Context} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import { NavSwitch } from './router/Router';
import { theme } from './style/theme';
import { Nav } from './components/nav';
import styled from 'styled-components';
import { DeviceContext, Devices, getDevice } from './device-context';

function App() {
  const device = getDevice();

  return (
    <Grommet className="App" theme={theme} background={theme.global.colors['light-2']}>
        <Router>
            <DeviceContext.Provider value={device}>
                <Layout device={device}>
                    <Nav/>
                    <NavSwitch/>
                </Layout>
            </DeviceContext.Provider>
        </Router>
    </Grommet>
  );
}

const layoutWidth = {
  'desktop': 'min-width: 1224px',
  'bigScreen': 'min-width: 1824',
  'mobile': 'max-width: 1224px'
}


const Layout = styled(Box)<{device: Devices}>`
  ${(props)=>layoutWidth[props.device]};
`

export default App;
