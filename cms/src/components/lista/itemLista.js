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

    const { cod_produto, nome, imagem, preco, descricao, status } = this.state.produto;

    return (
      <Fragment>
        <ModalProd produto={this.state.produto} show={this.state.isOpen} status={'editar'} onClose={this.toggleModal} />
        <div className="tbl-row" onClick={this.toggleModal}>

          <div className="t-col">

            {cod_produto}

          </div>

          <div className="t-col">
            <h4>
              {nome}
            </h4>
          </div>

          <div className="t-col desc-item">
            <p>
              {imagem}
            </p>
          </div>

          <div className="t-col preco-item">
            R${preco}

          </div>

          <div className="t-col preco-item">
            {descricao}

          </div>

          <div className="t-col status-item">
            <img src={status === 1 ? SvgAtivo : SvgInativo}
              alt={status === 1 ? SvgAtivo : SvgInativo}
              width="40px" />

            {status === 1 ? "Ativado" : "Desativado"}
          </div>

        </div>
      </Fragment>
    );
  }
}

export default ItemLista;
