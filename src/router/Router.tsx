import React,{Suspense} from 'react'
import * as Router from 'react-router-dom';
import { Box } from 'grommet';
import { Bio } from '../sections/bio';
import { Footer } from '../sections/footer';

export const NavSwitch = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Router.Switch>
            <Router.Route exact path="/">
                    <Landing />
                    <Transition/>
                    <Bio/>
                    <Footer/>
            </Router.Route>

        </Router.Switch>
    </Suspense>
)

const Landing = React.lazy(() => import('../sections/landing'));
const Transition = React.lazy(() => import('../sections/transition'));