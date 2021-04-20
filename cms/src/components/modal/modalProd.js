import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
/** */
import './style.css';

export class ModalProd extends Component {

    render() {

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod container" id="view-p">
                <div className="modal container">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>
                        
                        <h3>{this.props.title}</h3>

                    </header>
                    
                    <div className="modal-container container">
                        <div className="modal-img container">
                            <img src={this.props.image} alt={this.props.image} />

                        </div>

                        <div className="modal-content container">
                            <p className="modal-text">
                                {this.props.content[0]}
                            </p>

                            <code className="txt-price">
                                {this.props.content[1]}
                            </code>

                            <div className="container">
                                <code>
                                    {this.props.content[2]}
                                </code>
{/* 
                                <Link to='products/edit'>
                                    <button className="btn-default" type='submit' onClick={this.saveProd()} id="btnNew">
                                        Editar
                                    </button>
                                </Link> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

ModalProd.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

export default withRouter(ModalProd)