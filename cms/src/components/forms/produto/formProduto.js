import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
/** */
import { urlImg, clearInput, editProd, insertProd } from '../../../components/modulos';
import './style.css'
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';

export class FormProduct extends Component {
    constructor(props) {
        super(props)

        // Ternario se existe props.produto ele set o state.produto com o valor do props.produto
        props.produto ? this.state = { produto: props.produto, editar: props.editar} : this.state = { produto: [], editar: props.editar }

        this.formProd = this.formProd.bind(this);
        this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired

    };

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

        let produto = { ...this.state.produto }

        if (this.props.editar) {
            editProd(produto);

        } else {
            insertProd(produto);

        }

        produto = clearInput(produto);

        this.setState({ produto });

        this.props.history.push("/products");

    }

    render() {

        const { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = { ...this.state.produto }

        let imagem = img_prod === undefined || img_prod === '' ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + img_prod;

        return (
            <form className="form-produto content" id="form_add_prod" onSubmit={this.formProd}>
                <div className="content">

                    <input id="selecao-arquivo"
                        onChange={this.handleChange}
                        name="img_prod"
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={this.fileInput}
                    />

                    <img id="imgprod" src={imagem} alt={imagem}/>

                    <label className="lbl-file" tabIndex='0' htmlFor="selecao-arquivo" id="lbl-file">Selecionar Imagens</label>
                </div>

                <div className="cont-form-prod">
                    <div>
                        <input type="text"
                            name="nome_prod"
                            value={nome_prod || ''}
                            onChange={this.handleChange}
                            placeholder="Nome do Produto"
                            id="txtnome"
                        />

                    </div>

                    <div>
                        <textarea
                            value={descricao_prod}
                            name="descricao_prod"
                            placeholder="Descrição do Produto"
                            maxLength="400"
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>

                    <div>
                        <input type="text"
                            name="preco_prod"
                            value={preco_prod || ''}
                            onChange={this.handleChange}
                            placeholder="Preço do Produto"
                            id="txtpreco"
                        />
                    </div>

                    <div>
                        <label htmlFor="chk" className="switch">
                            <input id="chk"
                                type="checkbox"
                                name="status_prod"
                                checked={status_prod || 0}
                                onChange={this.handleChange}
                            />

                            <span className="slider round"></span>
                        </label>

                        <button className="btn-default" type="submit" id="btn-salvar">Salvar</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default withRouter(FormProduct)