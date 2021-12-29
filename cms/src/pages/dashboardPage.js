import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import DashboardCont from '../containers/dashboard-containers/dashboardCont';
/** */
import '../resources/css/App.css';

const DashboardPage = ({ match }) => (
    <main className="container">
        <Switch>
            <Route path={`${match.path}`} exact component={DashboardCont} />
            <Redirect to={`${match.url}`} />
        </Switch>
    </main>
)

export default DashboardPage;