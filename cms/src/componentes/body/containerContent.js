import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';
import ContainerBuscar from './containerBuscar/containerBuscar';

export class ContainerContent extends Component {

  state = {
    allProd: []

  }

  componentDidMount() {
    this.visualizarProd();

  }

  componentDidUpdate() {

  }

  visualizarProd() {

    this.setState({ allProd: []});

    let url = `http://127.1.1.0:3333/pordFirstHundred`;

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
  }

  render() {

    const produto = this.state.allProd;

    return (
      <div className="content">
        <ModalProd show={this.state.isOpen} onClose={this.toggleModal} />
        
        <ContainerBuscar onClose={this.toggleModal}/>

        <div className="tbl">
          {
            produto.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} onClose={this.toggleModal} />
            ))
          }
        </div>

      </div>
    )
  }
}

export default ContainerContent;