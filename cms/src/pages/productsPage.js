import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import Navbar from '../components/navbar/menu';
import AddProdCont from '../containers/addProdCont';
import EditProdCont from '../containers/editProdCont';
import ListProdCont from '../containers/listProdCont';
import '../resources/css/App.css';

const ProductsPage = ({ match }) => (
    <div>
        <Navbar />
        <main className="container">
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