import React, { Component } from "react";
import { Fragment } from "react";
/** */
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';
import { urlImg, clearInput, editProd, insertProd } from '../modulos';
// import './style.css';

export class ContainerAddProd extends Component {
    constructor(props) {
        super();

        // Ternario se existe props.produto ele set o state.produto com o valor do props.produto
        props.produto ? this.state = { produto: props.produto } : this.state = { produto: [] }

        this.formProd = this.formProd.bind(this);
        this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {

        const produto = { ...this.state.produto }
        const input = e.target
        let value = '';

        if (input.type === 'file') {
            value = urlImg(input, 'imgprod');

        } else if (input.type === 'checkbox') {
            value = input.checked;

        } else if (input.name === 'preco_prod') {
            value = input.value.replace(/[A-z]/, '');

        } else {
            value = input.value;

        }

        produto[input.name] = value;

        this.setState({ produto });
    }

    formProd(e) {
        e.preventDefault();

        alert('apertado')

        let produto = { ...this.state.produto }

        console.log('Status modal: ' + this.state.status);

        if (this.props.status === 'editar') {
            editProd(produto);

        } else {
            insertProd(produto);

        }

        produto = clearInput(produto);

        this.setState({ produto });

    }


    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        return (
            <Fragment>
                <form onSubmit={this.formProd} id="form_add_prod">
                    <div className="modal-prod">
                        <div className="box-img">
                            <input id="selecao-arquivo"
                                onChange={this.handleChange}
                                name="img_prod"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={this.fileInput} />

                            <img id="imgprod" src={img_prod === undefined || img_prod === '' ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + img_prod} alt={img_prod} width="200px" height="250px" />
                            <label tabIndex='0' htmlFor="selecao-arquivo" id="lbl-file">Selecionar um arquivo</label>
                        </div>

                        <div className="">
                            <div className="box-text">

                                <input type="text"
                                    className="input-modal"
                                    name="nome_prod"
                                    value={nome_prod || ''}
                                    onChange={this.handleChange}
                                    placeholder="Nome do Produto"
                                    id="txtnome"
                                />

                            </div>
                            <div className="box-text">
                                <textarea
                                    className="input-modal"
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
                                    className="input-modal"
                                    name="preco_prod"
                                    value={preco_prod || ''}
                                    onChange={this.handleChange}
                                    placeholder="Preço do Produto"
                                    id="txtpreco"
                                />

                            </div>
                            <div className="box-text box-btn">

                                <div>
                                    <label htmlFor="chk" className="switch">
                                        <input
                                            id="chk"
                                            type="checkbox"
                                            name="status_prod"
                                            checked={status_prod || 0}
                                            onChange={this.handleChange}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </div>


                                <button id="btn-salvar">Salvar</button>
                                {/* <button id="btn-del" onClick={this.btnDelete}>Excluir</button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default ContainerAddProd