import React, { Component } from 'react';
/** */
import List from '../components/lista/list';
import { Search } from '../components/forms/search/formSearch';

export class ListProdCont extends Component {
  constructor(props) {
    super(props)

  }

  state = {
    limits: 5
  }

  mudarNumero(){
    return this.setState( {limits : this.state.limits + this.state.limits + 1 } )

  }

  render() {
    return (
      <div className="content">

        {/** FROMULÁRIO BUSCAR */}

        <Search onClick={this.mudarNumero}/>

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