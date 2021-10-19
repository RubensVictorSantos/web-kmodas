import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import AddProdCont from '../containers/addProdCont';
import EditProdCont from '../containers/editProdCont';
import ListProdCont from '../containers/listProdCont';
import AttrProdCont from '../containers/attrProdCont';
import '../resources/css/App.css';

const ProductsPage = ({ match }) => (
    <div>
        <main className="container">
            <Switch>
                <Route path={`${match.path}`} exact component={ListProdCont} />
                <Route path={`${match.path}/add`} component={AddProdCont} />
                <Route path={`${match.path}/edit/:id`} component={EditProdCont} />
                <Route path={`${match.path}/attributes`} component={AttrProdCont} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)

export default ProductsPage