import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';
import ContainerBuscar from './containerBuscar/containerBuscar';

export class ContainerContent extends Component {

  state = {
    allProd: [],
    limits: undefined

  }

  componentDidMount() {
    this.visualizarProd(this.state.limits);

  }

  componentDidUpdate() {

  }

  async visualizarProd(num = 20) {

    this.setState({ allProd: []});

    let url = `http://127.1.1.0:3333/prod-LimitedNumber/` + num;

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

    this.visualizarProd()
  }

  render() {

    const allProd = this.state.allProd;

    return (
      <div className="content">
        <ModalProd show={this.state.isOpen} onClose={this.toggleModal} />
        
        <ContainerBuscar onClose={this.toggleModal}/>

        <div className="tbl">

    <p>{ this.state.limits }</p>

          {
            allProd.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} onClose={this.toggleModal} />
            ))
          }
          
          <div className="t-row">
            <div className="t-col">
              <input className="btn-carregar-itens" type='button' value='Carregar +'/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ContainerContent;