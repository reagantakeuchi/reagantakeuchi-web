import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Grommet, Layer } from "grommet";
import { NavSwitch } from "./router/Router";
import { theme } from "./style/theme";
import { Nav, Footer } from "./components";
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
      background={theme.global.colors["light-2"]}
    >
      <Router>
        <DeviceContext.Provider value={device}>
          <Layout device={device}>
            <Nav />
            <NavSwitch />
            <Footer />
          </Layout>
        </DeviceContext.Provider>
      </Router>
    </Grommet>
  );
}

const layoutWidth = {
  desktop: "min-width: 1224px",
  bigScreen: "min-width: 1824",
  mobile: "max-width: 1224px",
};

const Layout = styled.div<{ device: Devices }>`
  ${(props) => layoutWidth[props.device]};
  display: grid;
  height: max-content;
  min-height: 100vh;
  grid-template-rows: min-content auto;
`;

export default App;
