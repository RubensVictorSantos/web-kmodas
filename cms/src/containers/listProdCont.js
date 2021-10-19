import React, { Component } from 'react';
/** */
import { DOMAIN_API } from '../link_config';
import { Search } from '../components/forms/search/formSearch';
import { Fragment } from 'react';
import Table from '../components/table/table';
import Spinner from '../components/spinner/Spinner';

export class ListProdCont extends Component {
  constructor(props) {
    super(props)

    this.state = {
      limit: 5,
      search: false,
      texto: [],
      url: `${DOMAIN_API}/products/sort=cod_produto&limit=15`,
      products: [],
      error: null,
      isLoaded: false,
    }

    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    let url = this.state.url
    this.loadList(url);
    
  }

  changeState(search, texto = []) {

    let { url, limit } = this.state

    if (search) {
      url = `${DOMAIN_API}/products/id=${Object.values(texto)}`

    } else {

      limit += 20

      url = `${DOMAIN_API}/products/sort=cod_produto&limit=${limit}`

      this.loadList(url)

    }

    this.setState({
      url: url,
      limit: limit
    })

  }

  loadList(url = '') {

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            products: result
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

  render() {

    let { limit, products, error, isLoaded } = this.state

    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <Spinner text={'Loading...'} />

    } else {


      return (

        <Fragment>
          {/** FORMULÁRIO BUSCAR */}
          <Search changeState={this.changeState} />

          {/** TABELA */}
          <div className="tb-produto">
            <Table items={products} />

          </div>

          <div className="container" style={{width: '95%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <input className="btn-carregar-itens " onClick={() => this.changeState(false)} type='button' value='Carregar +20' />
            <label style={{ color: '#888', fontSize: '1rem' }}>Total {limit}</label>
          </div>
        </Fragment>
      )
    }
  }
}

export default ListProdCont;