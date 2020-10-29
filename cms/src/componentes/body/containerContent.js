import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';
import ContainerBuscar from './containerBuscar/containerBuscar';
import { visualizarProd } from './modulos';

export class ContainerContent extends Component {

  state = {
    allProd: []

  }

  componentDidMount() {
    this.visualizarProd();

    // console.log(visualizarProd())

  }

  componentDidUpdate() {

  }

  visualizarProd(id = 0) {

    console.log(id)

    // let url = '';

    // console.log(id);

    // this.setState({ allProd: []});

    // if( id === 0 ){

    //   url = `http://127.1.1.0:3333/pordFirstHundred`;
    
    // }else{
    //   url = `http://127.1.1.0:3333/prodId/${id}`;

    // }

    // $.ajax({
    //   url: url,
    //   type: 'get',
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   success: (result) => {

    //     this.setState({ allProd: result });

    //   },
    //   error: (status, error) => {
    //     console.log(status, error);

    //   }
    // })
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
        
        <ContainerBuscar visualizarProd={this.visualizarProd} onClose={this.toggleModal}/>

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