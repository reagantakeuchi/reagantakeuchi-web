import { Box } from 'grommet';
import React,{Suspense} from 'react'
import * as Router from 'react-router-dom';
import { Bio } from '../sections/bio';
import { Footer } from '../sections/footer';

export const NavSwitch = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Router.Switch>
            <Router.Route exact path="/">
                    <Box>
                        <Landing />  
                        <Transition/>
                        <Bio/>
                        <Footer/>
                    </Box>
            </Router.Route>
            <Router.Route path="/shop">
                <Store/>
            </Router.Route>
            <Router.Route path="/about-me">
                <AboutMe/>
            </Router.Route>
            <Router.Route path="/portfolio">
                <UnderConstruction/>
            </Router.Route>
            <Router.Route path="/contact">
                <ContactMe/>
            </Router.Route>
        </Router.Switch>
    </Suspense>
)

const Landing = React.lazy(() => import('../sections/landing'));
const Transition = React.lazy(() => import('../sections/transition'));
const UnderConstruction = React.lazy(() => import('./pages/under-construction'));
const ContactMe = React.lazy(() => import('./pages/contact-me'))
const AboutMe = React.lazy(() => import('./pages/about-me'))
const Store = React.lazy(() => import('./pages/store'))
