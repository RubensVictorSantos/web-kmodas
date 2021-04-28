import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import imgSearch from '../../resources/ico/search-black.svg';
import ModalProd from '../modal/modalProd';
import { autoKey } from '../modulos';
import './style.css';

const Item = (props) => {

  if (props.item === 1) {

    return (
      <td className='tb-col'>
        <img src={SvgAtivo} alt={SvgAtivo} />
      </td>)

  } else if (props.item === 0) {

    return (
      <td className='tb-col'>
        <img src={SvgInativo} alt={SvgInativo} />
      </td>)
  }

  return (<td className='tb-col'>{props.item}</td>)
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

    return (
      <Fragment>
        <tr className="tb-row">
          
          <td>
          </td>

          <td onClick={this.toggleModal}>

            <img src={imgSearch} alt={imgSearch}></img> 

            <ModalProd
              title={items.nome}
              image={items.imagem}
              content={
                [items.descricao, items.preco, items.status]
              }
              item={items}
              show={this.state.isOpen}
              onClose={this.toggleModal} />
          </td>
            
          {Object.values(items).map(item => {
            return <Item key={autoKey()} item={item} />
          })}

        </tr>
      </Fragment>
    );
  }
}

export default TableItem;
