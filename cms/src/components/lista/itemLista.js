import React, { Component, Fragment } from 'react';
/** */
import SvgAtivo from '../../resources/ico/check-green.svg';
import SvgInativo from '../../resources/ico/check-gray.svg';
import ModalProd from '../modal/modalProd';
import './style.css';

const Item = (props) => {

  if (props.item === 'Ativado') {

    return (
      <div className='tbl-col center'>
        <img src={SvgAtivo} alt={SvgAtivo} />
      </div>)

  } else if (props.item === 'Desativado') {

    return (
      <div className='tbl-col center'>
        <img src={SvgInativo} alt={SvgInativo} />
      </div>)
  }

  return (<div className='tbl-col center'>{props.item}</div>)
}

export class ItemLista extends Component {

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
        <ModalProd
          title={items.nome}
          image={items.imagem}
          content={
            [items.descricao, items.preco, items.status]
          }
          show={this.state.isOpen}
          onClose={this.toggleModal}/>

        <div className="tbl-row" onClick={this.toggleModal}>
          
          {Object.values(items).map(item => (<Item item={item} />))}
        
        </div>
      </Fragment>
    );
  }
}

export default ItemLista;
