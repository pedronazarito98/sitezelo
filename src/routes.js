import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';
import { Home } from './pages/Home/index'

export default (props) => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </HashRouter>
)