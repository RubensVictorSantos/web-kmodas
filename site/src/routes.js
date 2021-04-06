import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/** */
import ProductsPage from './pages/productsPage';
import HomePage from './pages/homePage';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Route path={`${url}home`} component={HomePage} />
                            <Route path={`${url}products`} component={ProductsPage} />
                        </Fragment>
                    )} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;