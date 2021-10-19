import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import icoDel from '../../resources/ico/Delete-Bin-Trash-PNG-Clipart.svg';
import imgSearch from '../../resources/ico/search-black.svg';
import ModalProd from '../modal/modalProd';
import './style.css';

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

  render() {
    let items = { ...this.props.items }
    let keyList = [];

    return (
      <Fragment>
        <tr className="tb-row">
          <td>
            <img className="view-item-btn" align="middle" src={icoDel} alt={icoDel} width="20px"></img>
          </td>

          <td>
            <ModalProd
              title={items.nome}
              image={items.imagem}
              content={[items.descricao, items.preco, items.status]}
              item={this.props.items}
              show={this.state.isOpen}
              onClose={this.toggleModal} />

            <img className="view-item-btn" align="middle" src={imgSearch} alt={imgSearch} onClick={this.toggleModal}></img>

          </td>

          {

            Object.entries(items).map(item => {
              keyList.push(keyList.length + 1);

              return (
                <td key={keyList.length} className='tb-col'>
                  <Item key={keyList.length} item={item} />
                </td>)
            })
          }

        </tr>
      </Fragment>
    );
  }
}

export default TableItem;
