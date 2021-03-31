import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/** */
import MainBodyContent from './components/body/container-body/contentBody';
// import ContentProduct from './components/body/content-product/contentProduct';
import Slide from './components/body/slide/slide';
import ContentFooter from './components/footer/container-footer/contentFooter';
import Navbar from './components/head/navbar/navbar';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Navbar />
                            <Route path="/" exact component={MainBodyContent} />
                            <Route path={`${url}produto`} component={Slide} />
                            <ContentFooter />
                        </Fragment>
                    )} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;