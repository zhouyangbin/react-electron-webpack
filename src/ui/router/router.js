var React = require('react');
var ReactDOM = require('react-dom');

import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../view/home.jsx';
import Detail from '../view/detail.jsx';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);
module.exports = BasicRoute;