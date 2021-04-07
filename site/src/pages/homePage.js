import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
/** */
import Navbar from '../components/navbar/navbar';
import ContentFooter from '../components/footer/contentFooter';
import { HomeCont } from '../containers/HomeCont';
import '../resources/css/index.css';

const HomePage = ({ match }) => (
    <div>
        <Navbar />
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={HomeCont} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
        {/* <ContentFooter /> */}
    </div>
)

export default HomePage