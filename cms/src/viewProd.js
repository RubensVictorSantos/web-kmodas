import React, { Component, Fragment } from "react"
import $ from "jquery"
/** */
import {DOMAIN_IMG_DEFAULT} from "./link_config";

export class ViewProd extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.inserirProd = this.inserirProd.bind(this);
        this.fileInput = React.createRef();

        this.state = {
            produto: {
                id: "",
                nome: "",
                imagem: "",
                descricao: "",
                preco: "",
                status: "",
            }
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate() {

        function readURL(input) {
            
            let img = $("#imgprod");
    
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    
                    img.attr("src", e.target.result);
                    console.table(input.files[0].name);
    
                };
                reader.readAsDataURL(input.files[0]);
    
            }
            else {
                
                var val = input.files[0].name;
                // console.log(val);
                img.attr("src", val);
    
            }
        }

        $("input[type=file]").on("change", function(){
            readURL(this);

        });
    }

    handleChange(event) {
        const produto = { ...this.state.produto }

        produto[event.target.name] = event.target.value;

        this.setState({ produto });

    }

    limparCampos(){

    }

    async inserirProd(event) {
        event.preventDefault();

        const url = "http://127.1.1.0:3333/addProd";
        var {nome ,imagem ,descricao ,preco } = this.state.produto;
        console.log(imagem)

        $.ajax({
            url: url,
            type: "post",
            data: JSON.stringify({ 
                "nome_prod": nome,
                "img_prod": imagem,
                "descricao_prod": descricao,
                "preco_prod": preco,
                "status_prod": 1}),
            header: "x-access-token",
            dataType: "json",
            contentType: "application/json",
            success: (result) => {
                console.table(result)
            },
            error: ( status) =>{

                alert(status)

            }
        })


    }
       
    render() {

        var {nome ,imagem ,descricao ,preco } = this.state.produto;

        return (
            <Fragment>
                <form onSubmit={this.inserirProd}>
                    <div className="modal-prod">
                        <div className="box-img">
                            <input  id="selecao-arquivo"
                                value={ imagem } 
                                onChange={ this.handleChange } 
                                name= "imagem" 
                                type= "file" 
                                accept= "image/png, image/jpeg" 
                                ref={ this.fileInput }
                                
                            />

                            <img id="imgprod" alt={imagem} width="200px" height="250px"/>
                            <label htmlFor="selecao-arquivo"  id="lbl_file">Selecionar um arquivo</label>
                        </div>

                        <div className="">
                            <div className="box-text">
                                <input  type="text" 
                                    name="nome" 
                                    value={nome} 
                                    onChange={this.handleChange} 
                                    placeholder="Nome do Produto" 
                                    id="txtnome"
                                />  

                            </div>
                            <div className="box-text">
                                <textarea value={descricao} 
                                    name="descricao"
                                    placeholder="Descrição do Produto"
                                    maxLength="100" 
                                    onChange={this.handleChange}
                                    >
                                </textarea>

                            </div>
                            <div className="box-text">
                                <input type="text" 
                                    name="preco" 
                                    value={preco} 
                                    onChange={this.handleChange} 
                                    placeholder="Preço do Produto" 
                                    id="txtpreco"
                                />

                            </div>
                            <div className="box-text">

                            </div>
                            <div className="box-text">
                                <button type="submit">Salvar</button>
                                {/* <button type="" className="btndel" id="btndel">Excluir</button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }

}

export default ViewProd