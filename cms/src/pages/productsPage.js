import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import AddProdCont from '../containers/products-containers/addProdCont';
import EditProdCont from '../containers/products-containers/editProdCont';
import ListProdCont from '../containers/products-containers/listProdCont';
import AttrProdCont from '../containers/products-containers/attrProdCont';
import '../resources/css/App.css';

const ProductsPage = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} render={({ match: { url } }) => (
            <main className='container'>
                <Route path={`${url}`} exact component={ListProdCont} />
                <Route path={`${url}/add`} component={AddProdCont} />
                <Route path={`${url}/edit/:id`} component={EditProdCont} />
                <Route path={`${url}/attributes`} component={AttrProdCont} />
            </main>
        )}
        />
        <Redirect to={`${match.url}`} />

    </Switch>
)

export default ProductsPage