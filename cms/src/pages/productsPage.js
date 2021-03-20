import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import Navbar from '../components/navbar/menu';
import AddProdCont from '../containers/addProdCont';
import ListProdCont from '../containers/listProdCont';

const ProductsPage = ({ match }) => (
    <div className="">
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={ListProdCont} />
                <Route path={`${match.path}/add`} exact component={AddProdCont} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default ProductsPage