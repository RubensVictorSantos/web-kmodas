import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/header/navbar/menu';

const HomePage = ({ match }) => (

    <div className="">
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={ () => (<h1>Home Page</h1>)} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default HomePage