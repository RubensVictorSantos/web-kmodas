import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
/** */
import './style.css';

export class ModalProd extends Component {

    // saveProd() {

    //     let produto = this.state.produto

    //     localStorage.setItem('produto', JSON.stringify(produto));
    // }

    render() {

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod content" id="view-p">
                <div className="modal content">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>
                        
                        <h2>{this.props.title}</h2>

                    </header>
                    
                    <div className="modal-container content">
                        <div className="modal-img content">
                            <img src={this.props.image} alt={this.props.image} />

                        </div>

                        <div className="modal-content content">
                            <p className="modal-text">
                                {this.props.content[0]}
                            </p>

                            <code className="txt-price">
                                {this.props.content[1]}
                            </code>

                            <div className="content">
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