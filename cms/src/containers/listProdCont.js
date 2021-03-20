import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
/** */
// import ItemLista from '../components/lista/itemLista';
import { DOMAIN_API } from '../link_config';
import List from '../components/lista/list';

export class ListProdCont extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    allProd: [],
    limits: 5,
    input: []
  }

  carregarItens = () => {
    this.setState({
      limits: this.state.limits + 20
    })
  }

  handleChange(e) {

    const input = { ...this.state.input }
    let value = '';

    value = e.target.value;

    input[e.target.name] = value;

    this.setState({ input });
  }

  buscarProdId = (id) => {

    const url = `${DOMAIN_API}/prodId/${id}`;

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: (result) => {

        console.log(result);

        return result

      }
    })
  }

  render() {

    return (
      <div className="content">

        {/** FROMULÁRIO BUSCAR */}

        <form className="formBuscar" onSubmit={this.formProd} id="formBuscar">
          <div>
            <label>ID: </label>
            <input className="numBuscar"
              type="number"
              name="txtId"
              onChange={this.handleChange}
            />
          </div>

          <input className=""
            type="text"
            name="txtNome"
            onChange={this.handleChange}
          />

          <button type='submit' className="" id="btnSearch">Buscar</button>
          {/* <button className="" onClick={this.props.onClose} type="" id="btn-novo">Novo</button> */}
          <Link to='Products/add' id="btn-novo">Novo</Link>

        </form>

        {/** TABELA */}

        <List limits={this.state.limits}/>

      </div>
    )
  }
}

export default ListProdCont;