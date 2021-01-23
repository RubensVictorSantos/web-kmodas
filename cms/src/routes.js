import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContainerAddProd from './componentes/body/containerAddProd/containerAddProd';
import ContainerContent from './componentes/body/containerContent';
import { Navbar } from './componentes/header/navbar/menu';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/" exact component={Menu, ContainerContent}/> */}

                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Navbar></Navbar>
                            {/* <ContainerContent></ContainerContent> */}
                            <Route path={`${url}Produto`} component={ContainerContent} />
                            <Route path={`${url}Cadastrar_Produto`} component={ContainerAddProd} />

                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;