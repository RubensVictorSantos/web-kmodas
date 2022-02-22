import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import icoDel from '../../resources/ico/Delete-Bin-Trash-PNG-Clipart.svg';
import imgSearch from '../../resources/ico/search-black.svg';
import ModalProd from '../modal/modalProd';
import './style.css';
import { DOMAIN_API } from '../../link_config';

const Item = (props) => {

  const key = props.item[0],
    value = props.item[1];

  if (key === 'status') {
    if (value > 0) {
      return (<img src={SvgAtivo} alt={SvgAtivo} />)

    } else {
      return (<img src={SvgInativo} alt={SvgInativo} />)

    }
  }
  return value

}

export class TableItem extends Component {
  state = { isOpen: false }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  deleteItem(key) {
    const url = `${DOMAIN_API}/products/id=${key}`

    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json());
  }

  render() {
    let item = this.props.item;
    let count = 0;

    return (
      <Fragment>
        <tr className="tb-row">
          <td>
            <button className="item-default-btn"
              onClick={() => this.deleteItem(item.cod_produto)}>
              <img align="middle" src={icoDel} alt={icoDel} width="20px"></img>

            </button>
          </td>

          <td>
            <ModalProd
              id={item.cod_produto}
              title={item.nome}
              image={item.imagem}
              content={[item.descricao, item.preco, item.status]}
              show={this.state.isOpen}
              onClose={this.toggleModal} />

            <img className="item-default-btn" align="middle" src={imgSearch} alt={imgSearch} onClick={this.toggleModal}></img>

          </td>

          {
            Object.entries(item).map((item, index) => {
              return(
              <td key={index} className='tb-col'>
                <Item key={index} item={item} />
              </td>)}
            )
          }
        </tr>
      </Fragment>
    );
  }
}

export default TableItem;
