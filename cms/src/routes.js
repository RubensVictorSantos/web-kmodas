import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/** */
import { FormLogin } from './components/login/formLogin';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';

/** Verificar se token é autentico */
export const isAuth = () => localStorage.getItem("token") !== null;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={FormLogin} />

                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <PrivateRoute path={`${url}home`} component={HomePage} />
                            <PrivateRoute path={`${url}products`} component={ProductsPage} />

                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;