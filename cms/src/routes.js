import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContainerAddProd from './componentes/body/containerAddProd/containerAddProd';
import ContainerContent from './componentes/body/containerContent';
import { Login } from './componentes/body/login/login';
import { Navbar } from './componentes/header/navbar/menu';

export const estaAutenticado = () => localStorage.getItem("token") != null;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            estaAutenticado() ? (
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