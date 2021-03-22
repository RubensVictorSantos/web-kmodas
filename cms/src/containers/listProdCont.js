import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
/** */
// import ItemLista from '../components/lista/itemLista';
import imgSearch from '../resources/ico/search.svg'
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
          <div className="box-search">

            <label htmlFor="txt-search" className="lbl-search">
              <input className=""
                type="text"
                name="txt-search"
                id="txt-search"
                placeholder="Buscar..."
                onChange={this.handleChange}
                required
              /><span/>
            </label>
            <button type='submit' className="btn-search" id="btnSearch">
              <img src={imgSearch}></img>
            </button>

          </div>

          <Link to='Products/add'>
            <button type='submit' className="btn-new" id="btnNew">
              Novo
            </button>
          </Link>

        </form>

        {/** TABELA */}

        <List limits={this.state.limits} />

      </div>
    )
  }
}

export default ListProdCont;