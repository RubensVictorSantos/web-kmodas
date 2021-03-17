import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

    mudarPg(){
        console.log(this.state.produto)
        // localStorage.getItem(this.state.produto)
    }

    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-prod" id="view-p">
                <span className="close" id="closed" onClick={this.props.onClose}>&times;</span>
                <div className="modal-prod">
                    <div className="title-modal">
                        <h2>{nome_prod}</h2>

                    </div>
                    <div className="container-modal">
                        <div className="img-modal">
                            <img id="imgprod" src={img_prod === undefined || img_prod === '' ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + img_prod} alt={img_prod} />

                        </div>
                        <div className="info-prod">
                            <div className="content-modal">
                                <p>{descricao_prod}
                                </p>

                            </div>
                            <div className="cost-modal">
                                <p>R${preco_prod}</p>

                            </div>
                            <div className="box-btn-edit">
                                <p>{status_prod === 0 ? 'Desativado' : 'Ativado'}</p>
                                {/* <input type="button" onClick={this.mudarPg} value="Mudar"/> */}
                                <Link onClick={this.mudarPg} to='Editar_Produto' className="link-edit-modal">Editar</Link>
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

export default ModalProd