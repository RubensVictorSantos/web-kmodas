import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import ContentHomeCont from '../containers/home-containers/contentHomeCont';

const HomePage = ({ match }) => (
    <main className="container">
        <Switch>
            <Route path={`${match.path}`} exact component={ContentHomeCont} />
            <Redirect to={`${match.url}`} />
        </Switch>
    </main>
)

export default HomePage