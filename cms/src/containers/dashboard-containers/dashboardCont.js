import React, { Component, Fragment } from 'react';
import BackButton from '../../components/buttons/btnPrevPage';
/** */
import './style.css';

export class DashboardCont extends Component {

    render() {
        return (
            <Fragment>
                <BackButton {...this.props} />
                <h1>
                    Dashboard
                </h1>
            </Fragment>
        )
    }
}

export default DashboardCont;