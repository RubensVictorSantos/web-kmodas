import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import Navbar from '../components/header/navbar/navbar';
import '../resources/css/index.css';

const ProductsPage = ({ match }) => (
    <div>
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={ListProdCont} />
                <Route path={`${match.path}/add`} component={AddProdCont} />
                <Route path={`${match.path}/edit`} component={EditProdCont} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default ProductsPage