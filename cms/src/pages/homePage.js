import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ItemLista from '../components/lista/itemLista';
import Navbar from '../components/navbar/menu';

const HomePage = ({ match }) => (

    <div className="">
        <Navbar />
        <main className="content">
            <Switch>
                <Route path={`${match.path}`} exact component={ () => <h1 style={{margin: '0 auto'}}>Bem Vindo!</h1>} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default HomePage