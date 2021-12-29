import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import AddProdCont from '../containers/products-containers/addProdCont';
import EditProdCont from '../containers/products-containers/editProdCont';
import ListProdCont from '../containers/products-containers/listProdCont';
import AttrProdCont from '../containers/products-containers/attrProdCont';
import LeftMenu from '../components/navbar/leftMenu';
import '../resources/css/App.css';

const ProductsPage = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} render={({ match: { url } }) => (
            <main>
                <LeftMenu url={[
                    {key: 1, path : `${url}`,title: 'Todos os produtos'},
                    {key: 2, path : `${url}/add`,title: 'Adicionar produto'},
                    {key: 3, path : `${url}/edit`,title: 'Editar produto'},
                    {key: 4, path : `${url}/attributes`,title: 'Categorias'},
                ]} />
                <div className="container">
                    <Route path={`${url}`} exact component={ListProdCont} />
                    <Route path={`${url}/add`} component={AddProdCont} />
                    <Route path={`${url}/edit/:id`} component={EditProdCont} />
                    <Route path={`${url}/attributes`} component={AttrProdCont} />
                </div>
            </main>
        )}
        />
        <Redirect to={`${match.url}`} />

    </Switch>
)

export default ProductsPage