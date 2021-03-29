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

        let produto = []

        produto = this.state.produto

        localStorage.setItem('produto', JSON.stringify(produto));
    }

    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        let imagem

        if (img_prod === undefined || img_prod === '') {
            imagem = DOMAIN_IMG_DEFAULT

        } else {
            imagem = DOMAIN_IMG + img_prod
        }

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod content" id="view-p">
                <div className="modal content">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>
                        
                        <h2>{nome_prod}</h2>

                    </header>
                    
                    <div className="modal-container content">
                        <div className="modal-img content">
                            <img id="" src={imagem} alt={img_prod} />

                        </div>

                        <div className="modal-content content">
                            <p className="modal-text">
                                {descricao_prod}
                            </p>

                            <code className="txt-price">
                                R${preco_prod}
                            </code>

                            <div className="content">
                                <code>
                                    {status_prod === 0 ? 'DESATIVADO' : 'ATIVADO'}
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