import React, { Component, Fragment } from "react";
/** */
// import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT, DOMAIN_API } from '../../../link_config';
import SelectImgProd from "../components/content-product/contentProduct";
import { urlImg, clearInput, editProd, insertProd } from '../components/modulos';
import './style.css';

export class AddProdCont extends Component {
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

        var { nome_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        return (
            <Fragment>
                <form onSubmit={this.formProd} id="form_add_prod">
                    <div className="modal-prod1">
                        <div style={{ gridColumnStart: 2 }}>
                            <div className="box-image-modal">

                                <input id="selecao-arquivo"
                                    onChange={this.handleChange}
                                    name="img_prod"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    ref={this.fileInput}
                                />

                                <div id="container-sprod">
                                    <SelectImgProd />
                                </div>
                                {/* 
                                <img id="imgprod" 
                                    src={img_prod === undefined || img_prod === '' ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + img_prod} 
                                    alt={img_prod} 
                                /> */}

                                <label tabIndex='0' htmlFor="selecao-arquivo" id="lbl-file">Selecionar Imagens</label>
                            </div>

                            <div className="box-input-modal">

                                <input type="text"
                                    name="nome_prod"
                                    value={nome_prod || ''}
                                    onChange={this.handleChange}
                                    placeholder="Nome do Produto"
                                    id="txtnome"
                                />

                                <textarea
                                    value={descricao_prod}
                                    name="descricao_prod"
                                    placeholder="Descrição do Produto"
                                    maxLength="400"
                                    onChange={this.handleChange}
                                >
                                </textarea>

                                <input type="text"
                                    name="preco_prod"
                                    value={preco_prod || ''}
                                    onChange={this.handleChange}
                                    placeholder="Preço do Produto"
                                    id="txtpreco"
                                />

                                <div className="box-btn">

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

                                    <button id="btn-salvar" className="btn-default">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default AddProdCont