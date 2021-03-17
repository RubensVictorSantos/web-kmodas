import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ContainerAddProd from '../containers/containerAddProd';
import ContainerContent from '../containers/containerContent';
import Navbar from '../components/header/navbar/menu';

const ProductsPage = ({ match }) => (
    <div className="">
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={ContainerContent} />
                <Route path={`${match.path}/add`} exact component={ContainerAddProd} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default ProductsPage