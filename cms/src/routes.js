import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/** */
import { FormLogin } from './components/forms/login/formLogin';
import TopMainNavbar from './components/navbar/topMainNavbar';
import DashboardPage from './pages/dashboardPage';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import UserLevelPage from './pages/userLevelPage';

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
                            <TopMainNavbar />
                            <PrivateRoute path={`${url}home`} component={HomePage} />
                            <PrivateRoute path={`${url}products`} component={ProductsPage} />
                            <PrivateRoute path={`${url}user_level`} component={UserLevelPage} />
                            <PrivateRoute path={`${url}dashboard`} component={DashboardPage} />
                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;