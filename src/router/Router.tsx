import { Grid, Box } from "grommet";
import React, { Suspense } from "react";
import * as Router from "react-router-dom";
import {Landing, AboutMe, ContactMe, Util} from './pages';

export const NavSwitch = () => (
    <Router.Switch>
      <Router.Route exact path="/">
        <Landing />
      </Router.Route>
      <Router.Route path="/about-me">
        <AboutMe />
      </Router.Route>
      <Router.Route path="/portfolio/util">
        <Util />
      </Router.Route>
      <Router.Route path="/contact">
        <ContactMe />
      </Router.Route>
    </Router.Switch>
);

