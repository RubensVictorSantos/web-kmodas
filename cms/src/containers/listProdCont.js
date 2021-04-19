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
      limits: 5,
      search: false,
      texto: [],
      url: `${DOMAIN_API}/prod-LimitedNumber/5`
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(search, texto = []) {

    let url

    if(search){
      url = `${DOMAIN_API}/prod-id/${Object.values(texto)}`

    }else{
      url = `${DOMAIN_API}/prod-LimitedNumber/${this.state.limits + 20}`

    }
    
    this.setState(
      { 
        url: url
      })
  }

  render() {

    let url = this.state.url

    return (

      <Fragment>
        {/** FROMULÁRIO BUSCAR */}

        <Search changeState={this.changeState} />

        {/** TABELA */}

        {/* <div className='tb-produto'> */}
          <Table url={url} />
        {/* </div> */}
        
        <div className="content">
          <input className="btn-carregar-itens" onClick={() => this.changeState(false)} type='button' value='Carregar +20' />
          <label style={{ position: 'absolute', right: '0', color: '#888', fontSize: '1rem' }}>{this.state.limits}</label>
        </div>
      </Fragment>
    )
  }
}

export default ListProdCont;