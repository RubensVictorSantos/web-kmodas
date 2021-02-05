import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContainerAddProd from './componentes/body/containerAddProd/containerAddProd';
import ContainerContent from './componentes/body/containerContent';
import { Login } from './componentes/body/login/login';
import { Navbar } from './componentes/header/navbar/menu';
import PropTypes from "prop-types";

/** Verificar se token é autentico */
export const isAuth = () => localStorage.getItem("token") != null;

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

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />

                    <Route path="/Produto" render={({ match: { url } }) => (
                        <Fragment>
                            <Navbar />
                            <PrivateRoute path={`${url}/`} exact component={ContainerContent} />
                            <PrivateRoute path={`${url}/Cadastrar_Produto`} component={ContainerAddProd} />

                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;