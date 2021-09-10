import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export class ModalProd extends Component {
    salvarLocal() {

        let item = JSON.stringify(this.props.item)

        localStorage.setItem('produto', item)
    }

    render() {

        const { title, image, content } = { ...this.props }

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod container" id="view-p">
                <div className="modal container">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>

                        <h3>{title}</h3>

                    </header>

                    <div className="modal-container container">
                        <div className="modal-img container">
                            <img src={DOMAIN_IMG + image} alt={image} />

                        </div>

                        <div className="modal-content container">
                            <p className="modal-text">
                                {content[0]}
                            </p>

                            <code className="txt-price">
                                {content[1]}
                            </code>

                            <div className="container">
                                <code>
                                    {content[2]}
                                </code>

                                <Link to={`products/edit/${title}`}>
                                    <button 
                                        className="btn-default" 
                                        type='submit' 
                                        onClick={() => this.salvarLocal()} 
                                        id="btnNew">

                                        Editar
                                    </button>
                                </Link>
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