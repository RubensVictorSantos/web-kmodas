import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
/** */
import ItemLista from '../components/lista/itemLista';
import { DOMAIN_API } from '../link_config';

export class ContainerContent extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    allProd: [],
    limits: 5,
    input: [],
    error: null,
    isLoaded: false,
    items: [],
  }

  componentDidMount() {
    this.loadList(this.state.limits);
  }

  loadList(num) {

    fetch(`${DOMAIN_API}/prod-LimitedNumber/${num}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            allProd: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  carregarItens = () => {

    let num = this.state.limits + 20;

    this.setState({
      limits: num
    })

    this.loadList(num)
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

    const allProd = this.state.allProd;

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