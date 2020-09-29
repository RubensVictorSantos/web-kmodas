import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import ViewProd from './viewProd';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = { allProd: [] }
    this.props = {id: [] }
    
  }
  
  componentDidMount() {
    this.tbl();
    $(".view-p").fadeOut()
  }

  componentDidUpdate(){
    this.newProd();

    $('.closed').on('click', ()=> {
      $(".view-p").fadeOut()
    })

  }

  // editProd(id){
  //   $('.btnedit').on('click', ()=> {
  //     $(".view-p").fadeIn();
  //     console.log(id)
  //   })
  // }

  newProd(){
    $('#btnnew').on('click', ()=> {
      $(".view-p").fadeIn()
    })
  }

  tbl() {

    const url = 'http://127.1.1.0:3333/allprod';

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
      success: (result) => {

        this.setState({ allProd: result })
      },
      error: (status, error) => {

        console.log(status, error);

      }
    })
  }

  render() {

    const produto = this.state.allProd;
    return (
      <div className="content">
        
        <div id="view-p" className="view-p">
          <span className="closed" id="closed">&times;&nbsp;&nbsp;</span>
          
          <ViewProd />

        </div>

        <div className="t-col">
          <button type="" className="btnnew" id="btnnew">Novo</button>
        </div>
        
        <div className="tbl">
          <div className="t-title">
            <div className="t-col">  Código     </div>
            <div className="t-col">  Nome       </div>
            <div className="t-col">  Imagem     </div>
            <div className="t-col">  Descrição  </div>
            <div className="t-col">  Preço      </div>
            <div className="t-col">  Status     </div>
            <div className="t-col">  Opções     </div>

          </div>

          {
            produto.map(produto => (
              
              <div className="t-row" key={produto.cod_prod}>
                <div className="t-col" id="idprod">
                  { produto.cod_prod }
                
                </div>
                <div className="t-col">
                  { produto.nome_prod }

                </div>
                <div className="t-col">
                  { produto.img_prod}

                </div>
                <div className="t-col">
                  { produto.descricao_prod }

                </div>
                <div className="t-col">
                  R${ produto.preco_prod }

                </div>
                <div className="t-col">
                  { produto.status_prod }

                </div>
                <div className="t-col">
                  <button type="" className="btnedit" id="btnedit">Visualizar</button>
                
                </div>
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
