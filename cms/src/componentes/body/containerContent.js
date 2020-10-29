import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';

export class ContainerContent extends Component {

  state = {
    allProd: []

  }

  componentDidMount() {
    this.visualizarProd();

  }

  componentDidUpdate(){
  
  }

  async visualizarProd() {

    this.setState({ allProd: [] });

    const url = 'http://127.1.1.0:3333/allprod';

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

  toggleModal = (produto) => {

    this.setState({
      isOpen: !this.state.isOpen,
      produto: produto

    });
  }



  render() {

    const produto = this.state.allProd;

    return (
      <div className="content">

        <div className="t-col">
          
          <ModalProd show={this.state.isOpen} onClose={this.toggleModal}/>

          <button className="btnnew" onClick={this.toggleModal} type="" id="btnnew"></button>
        </div>

        <div className="tbl">
          {
            produto.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} getProd={this.toggleModal}/>
            ))
          }
        </div>

      </div>
    )
  }
}

export default ContainerContent;