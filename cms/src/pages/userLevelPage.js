import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AddUserCont from '../containers/user_level-containers/addUserCont';
/** */
import '../resources/css/App.css';

const UserLevelPage = ({ match }) => (
    <main className="container">
        <Switch>
            <Route path={`${match.path}`} exact component={AddUserCont} />
            <Redirect to={`${match.url}`} />
        </Switch>
    </main>
)

export default UserLevelPage