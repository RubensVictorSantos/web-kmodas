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

  visualizarProd() {

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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const produto = this.state.allProd;

    return (
      <div className="content">

        <div className="t-col">
          
          <ModalProd show={this.state.isOpen} status={'salvar'} onClose={this.toggleModal}/>

          <button className="btnnew" onClick={this.toggleModal} type="" id="btnnew"></button>
        </div>

        <div className="tbl">
          {
            produto.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} />
            ))
          }
        </div>

      </div>
    )
  }
}

export default ContainerContent;