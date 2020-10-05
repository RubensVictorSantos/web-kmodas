import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
/** */
import ViewProd from './viewProd';
import ItemLista from './itemLista';

export class App extends Component {
  constructor(props){
    super()
    this.state = { allProd: [] }
    this.props = { idProd: [] }
    
  }
  
  componentDidMount() {
    this.tbl();
    $(".view-p").fadeOut();
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
  //     var target = $(this).closest('[data-key]');
  //     alert(target.data('key'));
  //   })
  // }

  newProd(){
    $('#btnnew').on('click', ()=> {
      $(".view-p").fadeIn();
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

        this.setState({ allProd: result });
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
          
          <ViewProd id={this.state.allProd}/>

        </div>

        <div className="t-col">
          <button type="" className="btnnew" id="btnnew">Novo</button>
        </div>
        
        <div className="tbl">
          {
            produto.map(produto => (
                <ItemLista key={produto.cod_prod} produto={ produto }/>
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;
