import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Page from 'src/Page/Page.jsx';
import PostsList from 'src/Posts/List.jsx';
import Home from 'src/Home/Home.jsx';

render(
    <BrowserRouter>
        <Page>
            <Switch>
                <Route path='/posts' component={PostsList}/>
                <Route path='/' component={Home}/>
            </Switch>
        </Page>
    </BrowserRouter>,
    document.getElementById('container')
);
