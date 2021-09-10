import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
/** */
import { FormLogin } from './components/forms/login/formLogin';
import LeftMenu from './components/navbar/leftMenu';
import TopMainNavbar from './components/navbar/topMainNavbar';
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
                            <div style={{ position: 'relative' }}>
                                <TopMainNavbar />
                                <LeftMenu />
                                <PrivateRoute path={`${url}home`} component={HomePage} />
                                <PrivateRoute path={`${url}products`} component={ProductsPage} />
                            </div>
                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;