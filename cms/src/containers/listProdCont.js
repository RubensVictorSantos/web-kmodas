import React, { Component } from 'react';
import $ from 'jquery';
/** */
import { DOMAIN_API } from '../link_config';
import List from '../components/lista/list';
import { Search } from '../components/forms/search/formSearch';

export class ListProdCont extends Component {
  constructor() {
    super()

    // this.handleChange = this.handleChange.bind(this);

  }

  state = {
    limits: 5
  }

  // handleChange(e) {

  //   const input = { ...this.state.input }
  //   let value = '';

  //   value = e.target.value;

  //   input[e.target.name] = value;

  //   this.setState({ input });
  // }

  render() {
    return (
      <div className="content">

        {/** FROMULÁRIO BUSCAR */}

        <Search/>

        {/** TABELA */}

        <List limits={this.state.limits} />

        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '65%' }}>
          {/* <input className="btn-carregar-itens" onClick={() => setCount(count + 20)} type='button' value='Carregar +20' /> */}
          {/* <label style={{ position: 'absolute', right: '0', color: '#aaa', fontSize: '1rem' }}>{count} Itens</label> */}
        </div>
      </div>
    )
  }
}

export default ListProdCont;