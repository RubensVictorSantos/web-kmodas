import React, { Component, Fragment } from 'react'
import $ from 'jquery'

export class ViewProd extends Component {
    constructor(props){
        super()

    }

    componentDidMount() {

    }

    salvar(){
        const url = 'http://127.1.1.0:3333/addProd';
        // e.preventDefault();

        $.ajax({
          url: url,
          type: 'post',
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
        return (
            <Fragment>
                <div className="modal-prod">
                    <div className="box-img">
                        {/* <img src={""}></img> */}
                    </div>
    
                    <div className="">
                        <div className="box-file">
                            <label htmlFor='selecao-arquivo'>Selecionar um arquivo</label>
                            <input id='selecao-arquivo' type='file' />
                        </div>
                        <div className="box-text">
                            {this.props.id}
                            <input type="text" placeholder="Nome" id="txtnome" ></input>
                        </div>
                        <div className="box-text">
                            <textarea></textarea>
                        </div>
                        <div className="box-text">
                            <input type="text" placeholder="Preço" id="txtpreco"></input>
                        </div>
                        <div className="box-text">
                            <button type="submit" placeholder="Preço">Salvar</button>
                            <button type="" className="btndel" id="btndel">Excluir</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default ViewProd