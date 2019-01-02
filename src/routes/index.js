import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from 'pages/home'
import About from 'pages/about'

const Routes = () => (
    <HashRouter>
        <div>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </HashRouter>
)

export default Routes
