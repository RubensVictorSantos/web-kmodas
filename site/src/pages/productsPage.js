import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import Navbar from '../components/navbar/navbar';
import ContentFooter from '../components/footer/contentFooter';
import '../resources/css/index.css';
import ProductsCont from '../containers/productsCont';

const ProductsPage = ({ match }) => (
    <div>
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={ProductsCont} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
        <ContentFooter />
    </div>
)

export default ProductsPage