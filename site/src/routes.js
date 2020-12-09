import React, { Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContentBody from './components/body/container-body/contentBody';
import ContentFooter from './components/footer/container-footer/contentFooter';
import Navbar from './components/head/navbar/navbar';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/" exact component={ContentBody}/> */}
                    <Navbar/>
                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Route path={url} component={ContentBody} />
                            <Route path={`${url}teste`} component={
                                ContentFooter
                            } />
                            <ContentFooter/>
                        </Fragment>
                    )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;