import React, { Component } from 'react';
import './style.css'

export default class BtnPrevPage extends Component {
    render() {
        return (
            <button
                className="btn-prev-page"
                onClick={this.props.history.goBack}>
                &#8249;
            </button>
        )
    }
}