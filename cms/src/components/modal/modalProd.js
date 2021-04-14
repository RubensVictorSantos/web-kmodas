import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
/** */
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../link_config';
import './style.css';

export class ModalProd extends Component {
    constructor(props) {
        super();

        // Ternario se existe props.produto ele set o state.produto com o valor do props.produto
        props.produto ? this.state = { produto: props.produto } : this.state = { produto: [] }

    }

    saveProd() {

        let produto = this.state.produto

        localStorage.setItem('produto', JSON.stringify(produto));
    }

    render() {

        var { nome, imagem, descricao, preco, status } = this.state.produto;

        let path

        if (imagem === undefined || imagem === '') {
            path = DOMAIN_IMG_DEFAULT

        } else {
            path = DOMAIN_IMG + imagem
        }

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod content" id="view-p">
                <div className="modal content">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>
                        
                        <h2>{nome}</h2>

                    </header>
                    
                    <div className="modal-container content">
                        <div className="modal-img content">
                            <img id="" src={path} alt={imagem} />

                        </div>

                        <div className="modal-content content">
                            <p className="modal-text">
                                {descricao}
                            </p>

                            <code className="txt-price">
                                R${preco}
                            </code>

                            <div className="content">
                                <code>
                                    {status === 0 ? 'DESATIVADO' : 'ATIVADO'}
                                </code>

                                <Link to='products/edit'>
                                    <button className="btn-default" type='submit' onClick={this.saveProd()} id="btnNew">
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
    produto: PropTypes.object
};

export default withRouter(ModalProd)