import React, { Component, Fragment } from 'react';
// import $ from 'jquery';
/** */
import SvgAtivo from '../../../ico/check-green.svg';
import SvgInativo from '../../../ico/check-gray.svg';
import { DOMAIN_IMG } from '../../../link_config';
import ModalProd from '../modal/modalProd';

export class ItemLista extends Component {
  constructor(props) {
    super()

    let produto = props.produto;

    this.state = { produto: produto }

  }

  componentDidMount() {
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
        <ModalProd produto={this.state.produto} show={this.state.isOpen} status={'editar'} onClose={this.toggleModal}/>
        <div className="t-row" onClick={this.toggleModal}>
          <div className="t-col">
            <div className="img-list">
              <img src={DOMAIN_IMG + img_prod} alt={"Imagem " + img_prod} width="120px" height="auto" />

            </div>

          </div>
          <div className="t-col">
            <div className="">
              <div className="t-col">
                <h4>
                  {cod_prod + " - " + nome_prod}
                </h4>
              </div>

              <div className="t-col">
                <p>
                  {descricao_prod}
                </p>
              </div>

              <div className="t-col ">
                R${preco_prod}

              </div>

            </div>
          </div>
          <div className="t-col">
            {
              status_prod === 1 ? "Ativado" : "Desativado"
            }
            <img src={status_prod === 1 ? SvgAtivo : SvgInativo}
              alt={status_prod === 1 ? SvgAtivo : SvgInativo}
              width="40px" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ItemLista;
