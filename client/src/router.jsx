import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

export const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);
