import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
/** */
// import {DOMAIN_IMG_DEFAULT} from "../../../link_config";

export class ModalProd extends Component {
    constructor(props) {
        super(props);
        this.inserirProd = this.inserirProd.bind(this);
        this.fileInput = React.createRef();

        this.state = {
            produto: props.produto || []
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        
    }

    componentDidUpdate() {

    }

    readURL(input) {
        console.log(input);

        let img = $("#imgprod");


        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                img.attr("src", e.target.result);

            };
            reader.readAsDataURL(input.files[0]);

        }
        else {

            var val = input.files[0].name;
            img.attr("src", val);

        }
    }

    handleChange(event) {

        const produto = { ...this.state.produto }

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        produto[event.target.name] = value;

        this.setState({
            produto
        });
    }

    async inserirProd(event) {
        event.preventDefault();

        const url = "http://127.1.1.0:3333/addProd";
        var { nome, imagem, preco, descricao, status } = this.state.produto;

        $.ajax({
            url: url,
            type: "post",
            data: JSON.stringify({
                "nome_prod": nome,
                "img_prod": imagem,
                "preco_prod": preco,
                "descricao_prod": descricao,
                "status_prod": status
            }),
            header: "x-access-token",
            dataType: "json",
            contentType: "application/json",
            success: (result) => {

                const produto = { ...this.state.produto }
                
                produto.nome = "";
                produto.imagem = "";
                produto.descricao = "";
                produto.preco = "";
                produto.status = false;
                
                this.setState({
                    produto
                });

                console.table(result);
            },
            error: (status) => {

                console.log(status);
                console.error(status);

            }
        })
    }

    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        if(!this.props.show) {
            return null;
        }

        return (

            <div className="view-p" id="view-p">
                <span className="closed" id="closed" onClick={this.props.onClose}>&times;&nbsp;&nbsp;</span>
                <form onSubmit={this.inserirProd} id="form">
                    <div className="modal-prod">
                        <div className="box-img">
                            <input id="selecao-arquivo"
                                value={img_prod}
                                onChange={this.handleChange, e => this.readURL(e.target)}
                                name="imagem"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={this.fileInput} />

                            <img id="imgprod" alt={img_prod} width="200px" height="250px" />
                            <label htmlFor="selecao-arquivo" id="lbl_file">Selecionar um arquivo</label>
                        </div>

                        <div className="">
                            <div className="box-text">
                                
                                <input type="text"
                                    className="inp-modal"
                                    name="nome"
                                    value={nome_prod}
                                    onChange={this.handleChange}
                                    placeholder="Nome do Produto"
                                    id="txtnome"
                                />

                            </div>
                            <div className="box-text">
                                <textarea 
                                    className="inp-modal"
                                    value={descricao_prod}
                                    name="descricao"
                                    placeholder="Descrição do Produto"
                                    maxLength="100"
                                    onChange={this.handleChange}
                                >
                                </textarea>

                            </div>
                            <div className="box-text">
                                <input type="number"
                                    className="inp-modal"
                                    name="preco"
                                    value={preco_prod}
                                    onChange={this.handleChange}
                                    placeholder="Preço do Produto"
                                    id="txtpreco"
                                />

                            </div>
                            <div className="box-text box-btn">
                                <button id="btn-salvar" type="submit">Salvar</button>

                                <div>
                                    Ativar&ensp;
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            checked={status_prod}
                                            onChange={this.handleChange}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

ModalProd.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    produto: PropTypes.object
};

export default ModalProd