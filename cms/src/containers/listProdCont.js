import React, { Component } from 'react';
// import $ from 'jquery';
/** */
import { DOMAIN_API } from '../link_config';
import { Search } from '../components/forms/search/formSearch';
import { Fragment } from 'react';
import Table from '../components/table/table';

export class ListProdCont extends Component {
  constructor(props) {
    super(props)

    this.state = {
      limit: 5,
      search: false,
      texto: [],
      url: `${DOMAIN_API}/products/sort=cod_produto&limit=15`
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(search, texto = []) {

    let { url, limit } = this.state

    if (search) {
      url = `${DOMAIN_API}/products/id=${Object.values(texto)}`

    } else {

      limit += 20

      url = `${DOMAIN_API}/products/sort=cod_produto&limit=${limit}`

    }

    this.setState({ 
      url: url, 
      limit : limit 
    })

  }

  render() {

    let { url, limit } = this.state

    return (

      <Fragment>
        {/** FROMULÁRIO BUSCAR */}

        <Search changeState={this.changeState} />

        {/** TABELA */}

        <div className="tb-produto">
          <Table url={url} />

        </div>

        <div className="container">
          <input className="btn-carregar-itens " onClick={() => this.changeState(false)} type='button' value='Carregar +20' />
          <label style={{ position: 'absolute', right: '0', color: '#888', fontSize: '1rem' }}>Total {limit}</label>
        </div>
      </Fragment>
    )
  }
}

export default ListProdCont;