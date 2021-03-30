import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import ModalProd from '../modal/modalProd';
import './style.css';

export class ItemLista extends Component {
  constructor(props) {
    super(props)

    let produto = props.produto;
    this.state = {
      produto: produto
    }

  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const { cod_prod, nome_prod, img_prod, preco_prod, descricao_prod, status_prod } = this.state.produto;

    return (
      <Fragment>
        <ModalProd produto={this.state.produto} show={this.state.isOpen} status={'editar'} onClose={this.toggleModal} />
        <div className="tbl-row" onClick={this.toggleModal}>

          <div className="t-col">

            {cod_prod}

          </div>

          <div className="t-col">
            <h4>
              {nome_prod}
            </h4>
          </div>

          <div className="t-col desc-item">
            <p>
              {img_prod}
            </p>
          </div>

          <div className="t-col preco-item">
            R${preco_prod}

          </div>

          <div className="t-col preco-item">
            {descricao_prod}

          </div>

          <div className="t-col status-item">
            <img src={status_prod === 1 ? SvgAtivo : SvgInativo}
              alt={status_prod === 1 ? SvgAtivo : SvgInativo}
              width="40px" />

            {status_prod === 1 ? "Ativado" : "Desativado"}
          </div>

        </div>
      </Fragment>
    );
  }
}

export default ItemLista;
