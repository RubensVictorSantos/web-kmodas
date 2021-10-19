import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
/** */
import { urlImg, clearInput, editProd, postData } from '../../../components/modulos';
import './style.css'
import { DOMAIN_API, DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';

export class FormProduct extends Component {
    constructor(props) {
        super(props)

        let produto = localStorage.produto ? JSON.parse(localStorage.produto) : []

        // Ternario se existe props.produto ele set o state.produto com o valor do props.produto
        this.state = {
            produto: produto,
            editar: props.editar,
            disabledForm: { disabled: true },
            editImage: false
        }

        this.formProd = this.formProd.bind(this);
        this.addImage = this.addImage.bind(this);
        this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired

    };

    componentDidMount() {
        if (this.props.editar) {
            this.setState({ disabledForm: { disabled: false } })
        }

    }

    handleChange(e) {
        const produto = { ...this.state.produto }
        const input = e.target
        let value = '';

        if (input.type === 'file') {
            value = urlImg(input, 'imgprod');
            this.setState({ editImage: true })

        } else if (input.type === 'checkbox') {
            value = input.checked;

        } else if (input.name === 'preco') {
            value = input.value.replace(/[A-z]/, '');

        } else {
            value = input.value;

        }
        produto[input.name] = value;
        this.setState({ produto });

    }

    formProd(e) {
        e.preventDefault()
        let produto = { ...this.state.produto }

        if (this.props.editar) {
            editProd(produto);
            localStorage.removeItem('produto');

        } else {
            const url = `${DOMAIN_API}/products`;
            postData(url, produto)
                .then(data => this.setState({ produto: data }));

        }
        this.setState({ disabledForm: { disabled: false } });

    }

    addImage(e) {
        e.preventDefault();
        let produto = { ...this.state.produto }
        const dataForm = new FormData();

        if (this.state.editImage) {
            dataForm.append('image', produto.imagem);

            fetch(`${DOMAIN_API}/products/image/${produto.cod_produto}`, {
                method: 'PUT',
                body: dataForm,

            });

        }
        produto = clearInput(produto);
        this.setState({ produto });
        this.props.history.push("/products");

    }

    render() {
        let produto = this.state.produto
        let disabledForm = this.state.disabledForm
        let { nome, imagem, descricao, preco, status } = { ...produto }

        imagem = imagem === null || imagem === '' || imagem === undefined ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + imagem;

        return (
            <div className="main-form-produto">
                <form>
                    <fieldset className="cont-form-prod" >
                        <legend>Formulario Produto</legend>

                        <div className="box-form col-nome">
                            <label>NOME PRODUTO: </label>
                            <input type="text"
                                name="nome"
                                value={nome || ''}
                                onChange={this.handleChange}
                                id="txtnome"
                            />
                        </div>

                        <div className="box-form col-modelo">
                            <label>MODELO: </label>
                            <select value="" onChange={this.handleChange}>
                                <option value="masc">MASC</option>
                                <option value="femi">FEM</option>
                            </select>
                        </div>

                        <div className="box-form col-tamanho">
                            <label>TAMANHO:</label>
                            <select value="" onChange={this.handleChange}>
                                <option value="P">P</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="GG">GG</option>
                                <option value="XG">XG</option>
                                <option value="G2">G2</option>
                                <option value="G3">G3</option>
                            </select>
                        </div>

                        <div className="box-form col-desc">
                            <label>DESCRIÇÃO:</label>
                            <textarea
                                value={descricao}
                                name="descricao"
                                placeholder=""
                                maxLength="400"
                                onChange={this.handleChange}
                            >
                            </textarea>
                        </div>

                        <div className="box-form col-preco">
                            <label>PREÇO:</label>
                            <input type="text"
                                name="preco"
                                value={preco || ''}
                                onChange={this.handleChange}
                                placeholder="R$00.00"
                                id="txtpreco"
                            />
                        </div>

                        <label htmlFor="chk" className="switch">
                            <input id="chk"
                                type="checkbox"
                                name="status"
                                checked={status || 0}
                                onChange={this.handleChange}
                            />

                            <span className="slider-switch round"></span>
                        </label>

                        <div className="box-form col-preco">

                            <button className="btn-next btn-default "
                                onClick={this.formProd}>
                                PROXIMO &raquo;
                            </button>
                        </div>
                    </fieldset>

                    <fieldset className="image-form-container" {...disabledForm} >
                        <legend>Imagem Produto</legend>

                        <div className="container">
                            <input id="selecao-arquivo"
                                onChange={this.handleChange}
                                name="imagem"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={this.fileInput}
                            />

                            <img id="imgprod" src={imagem} alt={imagem} />

                            <label className="lbl-file" tabIndex='0' htmlFor="selecao-arquivo" id="lbl-file">Selecionar Imagens</label>
                        </div>
                        
                        {/* <div className="container">
                            <input id="selecao-arquivo"
                                onChange={this.handleChange}
                                name="imagem"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={this.fileInput}
                            />

                            <img id="imgprod" src={imagem} alt={imagem} />

                            <label className="lbl-file" tabIndex='0' htmlFor="selecao-arquivo" id="lbl-file">Selecionar Imagens</label>
                        </div> */}
                        
                    </fieldset>

                    <button className="btn-default"
                        id="btn-salvar"
                        onClick={this.addImage}>
                        {/* Salvar */}
                        Adicionar imagem
                    </button>

                </form>
            </div>
        )
    }
}

export default withRouter(FormProduct)