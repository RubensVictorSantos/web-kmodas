import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContainerContent from './componentes/body/containerContent';
import ModalProd from './componentes/body/modal/modalProd';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ContainerContent}/>

                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Route path={`${url}/Produto`} component={ModalProd} />

                        </Fragment>
                    )}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;