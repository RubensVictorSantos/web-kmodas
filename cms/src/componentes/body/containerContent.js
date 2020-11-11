import React, { Component } from 'react';
import $ from 'jquery';
/** */
import ItemLista from './lista/itemLista';
import ModalProd from './modal/modalProd';
import ContainerBuscar from './containerBuscar/containerBuscar';

export class ContainerContent extends Component {
  // constructor(){
  //   super()

  //   this.carregarItens = this.carregarItens;
  // }
  
  state = {
    allProd: [],
    limits: 5

  }

  componentDidMount() {
    this.visualizarProd(this.state.limits);

  }

  componentDidUpdate() {

  }

  async visualizarProd(num) {

    console.log(num)

    this.setState({ allProd: [] });

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

  carregarItens = () => { 

    console.log('Carregar: ' + this.state.limits);

    let num = this.state.limits + 5

    this.setState({
      limits: num
    })

    this.visualizarProd(this.state.limits)
  }

  render() {

    const allProd = this.state.allProd;

    return (
      <div className="content">
        <ModalProd show={this.state.isOpen} onClose={this.toggleModal} />

        <ContainerBuscar onClose={this.toggleModal} />

        {/* teste:
        <p>{this.state.limits}</p> */}

        <div className="tbl">

          {
            allProd.map(produto => (
              <ItemLista key={produto.cod_prod} produto={produto} onClose={this.toggleModal} />
            ))
          }
        </div>
        <div>
          <input className="btn-carregar-itens" onClick={this.carregarItens} type='button' value='Carregar +20' /><label>Total: { this.state.allProd.length }</label>
        </div>
      </div>
    )
  }
}

export default ContainerContent;