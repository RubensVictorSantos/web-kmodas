import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
/** */
import SvgAtivo from './ico/check-red.svg';
import SvgInativo from './ico/check-gray.svg';
import SvgView from './ico/view.svg';

export class ItemLista extends Component {
  constructor(props){
    super()
    this.state = { produto: props.produto }
    
  }
  
  componentDidMount() {
    // this.tbl();
    // $(".view-p").fadeOut();
  }

  componentDidUpdate(){



    // this.newProd();

    // $('.closed').on('click', ()=> {
    //   $(".view-p").fadeOut()
      
    // })

  }

  // editProd(id){
  //   $('.btnedit').on('click', ()=> {
  //     $(".view-p").fadeIn();
  //     var target = $(this).closest('[data-key]');
  //     alert(target.data('key'));
  //   })
  // }

  // newProd(){
  //   $('#btnnew').on('click', ()=> {
  //     $(".view-p").fadeIn();
  //   })
  // }

  // tbl() {

  //   const url = 'http://127.1.1.0:3333/allprod';

  //   $.ajax({
  //     url: url,
  //     type: 'get',
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     success: (result) => {

  //       this.setState({ allProd: result })
  //     },
  //     error: (status, error) => {

  //       console.log(status, error);

  //     }
  //   })
  // }

  render() {

    const produto = this.state.produto;
    return (       
      <div className="t-row"> 
        <div className="t-col">
          <div className="img-list">
            <img src={ produto.img_prod } alt={ produto.img_prod } width="70px" height="auto"/>
            { console.table(produto.img_prod.length)   }
          </div>
          
        </div>
        <div className="t-col">
          <div className="">
            <div>
              { this.props.produto.cod_prod }
            </div>
            <div className="t-col">
              { this.props.produto.nome_prod }

            </div>
          </div>
        
        </div>
        <div className="t-col">
          { this.props.produto.descricao_prod }

        </div>
        <div className="t-col">
          R${ this.props.produto.preco_prod }

        </div>
        <div className="t-col">
          <img src={ this.props.produto.status_prod === 1 ? SvgAtivo: SvgInativo} 
            alt={ this.props.produto.status_prod === 1 ? SvgAtivo: SvgInativo} 
            width="40px"/>
        </div>
        <div className="t-col">
          <button type="" className="btnedit" id="btnedit">
            <img src={ SvgView } 
              alt={ SvgView } />
          </button>
        
        </div>
      </div>
    );
  }
}

export default ItemLista;
