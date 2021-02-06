import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';
import ContainerBuscar from './containerBuscar/containerBuscar';
import { DOMAIN_API } from '../../link_config';

export class ContainerContent extends Component {

  state = {
    allProd: [],
    limits: 5

  }

  componentDidMount() {
    this.visualizarProd(this.state.limits);

  }

  componentDidUpdate() {

  }

  visualizarProd(num) {

    this.setState({ allProd: [] });

    let url = `${DOMAIN_API}/prod-LimitedNumber/${num}`;

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
      success: (result) => {

        this.setState({ allProd: result });

      },
      error: (status, error) => {
        console.log(status, error);

      }
    })
  }

  toggleModal = () => {

    this.setState({
      isOpen: !this.state.isOpen,
    });

    this.visualizarProd(this.state.limits)
  }

  carregarItens = () => {

    let num = this.state.limits + 20;

    this.setState({
      limits: num
    })

    this.visualizarProd(num)
  }

  render() {

    const allProd = this.state.allProd;

    return (
      <div className="content">
        <ModalProd show={this.state.isOpen} onClose={this.toggleModal} />

        <ContainerBuscar onClose={this.toggleModal} />

        <div className="tbl">

          {
            allProd.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} onClose={this.toggleModal} />
            ))
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '65%' }}>
          <input className="btn-carregar-itens" onClick={this.carregarItens} type='button' value='Carregar +20' />
          <label style={{ position: 'absolute', right: '0', color: '#aaa', fontSize: '1rem' }}>{this.state.allProd.length} Itens</label>
        </div>
      </div>
    )
  }
}

export default ContainerContent;