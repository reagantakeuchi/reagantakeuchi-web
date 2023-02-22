import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Grommet, Layer, Box } from "grommet";
import { NavSwitch } from "./router/Router";
import { theme } from "./style/theme";
import { Nav, Footer } from "./global";
import styled from "styled-components";
import { DeviceContext, Devices } from "./context";
import { useMediaQuery } from "react-responsive";

function deviceSwitch(devices: {
  desktop: boolean;
  bigScreen: boolean;
  mobile: boolean;
}): Devices {
  const { desktop, bigScreen } = devices;

  if (desktop) return "desktop";
  if (bigScreen) return "bigScreen";
  return "mobile";
}

function App() {
  const media = {
    desktop: useMediaQuery({ query: "(min-device-width: 1224px)" }),
    bigScreen: useMediaQuery({ query: "(min-device-width: 1824px)" }),
    mobile: useMediaQuery({ query: "(max-width: 1224px)" }),
  };

  const device = deviceSwitch(media);

  return (
    <Grommet
      className="App"
      theme={theme}
    >
      <Router>
          <Layout responsive>
            <Nav />
            <NavSwitch />
            <Footer />
          </Layout>
      </Router>
    </Grommet>
  );
}

const Layout = styled(Box)`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content auto auto;
`;

export default App;
