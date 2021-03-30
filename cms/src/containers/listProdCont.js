import React, { Component } from 'react';
// import $ from 'jquery';
/** */
// import { DOMAIN_API } from '../link_config';
import List from '../components/lista/list';
import { Search } from '../components/forms/search/formSearch';
import { Fragment } from 'react';

export class ListProdCont extends Component {
  constructor(props) {
    super(props)

    this.state = {
      limits: 5,
      search: false,
      texto: []
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(teste, test = []) {

    this.setState(
      { 
        limits: this.state.limits + 20, 
        search: teste,
        texto: test
      })
  }

  render() {
    return (

      <Fragment>
        {/** FROMULÁRIO BUSCAR */}

        <Search changeState={this.changeState} />

        {/** TABELA */}

        <List limits={ {limit: this.state.limits, search: this.state.search, texto: this.state.texto}}/>

        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '65%' }}>
          <input className="btn-carregar-itens" onClick={() => this.changeState(false)} type='button' value='Carregar +20' />
          <label style={{ position: 'absolute', right: '0', color: '#888', fontSize: '1rem' }}>{this.state.limits}</label>
        </div>
      </Fragment>
    )
  }
}

export default ListProdCont;