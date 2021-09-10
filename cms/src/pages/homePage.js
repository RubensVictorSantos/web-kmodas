import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const HomePage = ({ match }) => (

    <div className="">
        <main className="container">
            <Switch>
                <Route path={`${match.path}`} exact component={ () => <h1 style={{margin: '0 auto'}}>Bem Vindo!</h1>} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default HomePage