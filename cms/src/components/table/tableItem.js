import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import ImgDelete from '../../resources/ico/delete-gray-png.png'
import ModalProd from '../modal/modalProd';
import './style.css';
import { autoKey } from '../modulos';
import { Link } from 'react-router-dom';

const Item = (props) => {

  if (props.item === 'Ativado') {

    return (
      <div className='tb-col'>
        <img src={SvgAtivo} alt={SvgAtivo} />
      </div>)

  } else if (props.item === 'Desativado') {

    return (
      <div className='tb-col'>
        <img src={SvgInativo} alt={SvgInativo} />
      </div>)
  }

  return (<div className='tb-col'>{props.item}</div>)
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

        <div className="tb-row" onClick={this.toggleModal}>

          {Object.values(items).map(item => {
            return <Item key={autoKey()} item={item} />
          })} 

          <div>

            <ModalProd
              title={items.nome}
              image={items.imagem}
              content={
                [items.descricao, items.preco, items.status]
              }
              show={this.state.isOpen}
              onClose={this.toggleModal} />

          </div>

        </div>
      </Fragment>
    );
  }
}

export default TableItem;
