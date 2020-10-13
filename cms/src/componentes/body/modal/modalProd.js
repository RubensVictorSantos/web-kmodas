import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
/** */

export class ModalProd extends Component {
    constructor(props) {
        super();
        this.inserirProd = this.inserirProd.bind(this);
        this.fileInput = React.createRef();

        // Se existe props ele set o state com o valor do props

        props.produto ? this.state = { produto: props.produto } : this.state = { produto: [] }

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    readURL(input) {

        const produto = { ...this.state.produto }

        let img = $("#imgprod");

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                img.attr("src", e.target.result);

            };

            reader.readAsDataURL(input.files[0]);

            produto[input.name] = input.files[0].name;

            this.setState({
                produto
            });
        }
        else {
            var val = input.files[0].name;
            img.attr("src", val);

        }
    }

    handleChange(event) {

        const produto = { ...this.state.produto }

        console.log(this.state.produto)

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        produto[event.target.name] = value;

        this.setState({
            produto
        });
    }

    edtarProd(event) {
        event.preventDefault();

        const url = "http://127.1.1.0:3333/updateProd";
        var { cod_prod, nome_prod, img_prod, preco_prod, descricao_prod, status_prod } = this.state.produto;

        $.ajax({
            url: url,
            type: "patch",
            data: JSON.stringify({
                "cod_prod": cod_prod,
                "nome_prod": nome_prod,
                "img_prod": img_prod,
                "preco_prod": preco_prod,
                "descricao_prod": descricao_prod,
                "status_prod": status_prod
            }),
            header: "x-access-token",
            dataType: "json",
            contentType: "application/json",
            success: (result) => {

                alert("Dados alterados com sucesso!");

            }

        })

    }

    inserirProd(event) {
        event.preventDefault();

        if (this.props.edit === 1) {
            

            this.edtarProd(event)

        } else {

            const url = "http://127.1.1.0:3333/addProd";
            var { nome_prod, img_prod, preco_prod, descricao_prod, status_prod } = this.state.produto;

            $.ajax({
                url: url,
                type: "post",
                data: JSON.stringify({
                    "nome_prod": nome_prod,
                    "img_prod": img_prod,
                    "preco_prod": preco_prod,
                    "descricao_prod": descricao_prod,
                    "status_prod": status_prod
                }),
                header: "x-access-token",
                dataType: "json",
                contentType: "application/json",
                success: (result) => {

                    // alert('Produto ' + result.nome_prod + ' cadastrado com sucesso!')

                    const produto = { ...this.state.produto }

                    produto.nome_prod = "";
                    produto.img_prod = "";
                    produto.descricao_prod = "";
                    produto.preco_prod = "";
                    produto.status_prod = false;

                    this.clearInput(produto);

                    this.setState({
                        produto
                    });


                },
                error: (status) => {

                    console.log(status);
                    console.error(status);

                }
            })

        }
    }

    clearInput(arr) {
        for (let i in arr) {

            console.log(i);
        }
    }

    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        if (!this.props.show) {
            return null;
        }

        return (

            <div className="view-p" id="view-p">
                <span className="closed" id="closed" onClick={this.props.onClose}>&times;&nbsp;&nbsp;</span>
                <form onSubmit={this.inserirProd} id="form">
                    <div className="modal-prod">
                        <div className="box-img">
                            <input id="selecao-arquivo"
                                value={''}
                                onChange={e => this.readURL(e.target)}
                                name="img_prod"
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
                                    name="nome_prod"
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
                                    name="descricao_prod"
                                    placeholder="Descrição do Produto"
                                    maxLength="100"
                                    onChange={this.handleChange}
                                >
                                </textarea>

                            </div>
                            <div className="box-text">
                                <input type="text"
                                    className="inp-modal"
                                    name="preco_prod"
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
                                            name="status_prod"
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