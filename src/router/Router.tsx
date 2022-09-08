import { Grid } from "grommet";
import React, { Suspense } from "react";
import * as Router from "react-router-dom";

export const NavSwitch = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router.Switch>
      <Router.Route exact path="/">
        <Landing />
      </Router.Route>
      <Router.Route path="/shop">
        <Store />
      </Router.Route>
      <Router.Route path="/about-me">
        <AboutMe />
      </Router.Route>
      <Router.Route path="/portfolio">
        <Portolio />
      </Router.Route>
      <Router.Route path="/contact">
        <ContactMe />
      </Router.Route>
    </Router.Switch>
  </Suspense>
);

const Landing = React.lazy(() => import("./pages/landing"));
const UnderConstruction = React.lazy(
  () => import("./pages/under-construction")
);
const ContactMe = React.lazy(() => import("./pages/contact-me"));
const AboutMe = React.lazy(() => import("./pages/about-me"));
const Store = React.lazy(() => import("./pages/store"));
const Portolio = React.lazy(() => import("./pages/portfolio"));
