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

        // if (!this.props.show) {
        //     return false;
        // }

        if (this.props.show) {
            return false;
        }

        return (

            <div className="view-prod center" id="view-p">
                <div className="modal-prod center">
                    <header className="modal-header">
                        <span className="modal-close" id="closed" onClick={this.props.onClose}>&times;</span>
                        
                        <h2>{nome_prod}</h2>

                    </header>
                    
                    <div className="modal-container">
                        <div className="modal-img center">
                            <img id="" src={imagem} alt={img_prod} />

                        </div>

                        <div className="modal-content center">
                            <div className="info-prod">
                                <p>{descricao_prod}</p>

                            </div>
                            <div className="cost-modal">
                                <p>R${preco_prod}</p>

                            </div>
                            <div className="box-btn-edit">
                                <p>{status_prod === 0 ? 'Desativado' : 'Ativado'}</p>

                                <Link to='products/edit'>
                                    <button type='submit' onClick={this.saveProd()} className="btn-default" id="btnNew">
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