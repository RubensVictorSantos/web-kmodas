import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
/** */
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';
import urlImg, { editProd, insertProd } from '../modulos';

export class ModalProd extends Component {
    constructor(props) {
        super();
        this.formProd = this.formProd.bind(this);
        this.fileInput = React.createRef();

        // Se existe props ele set o state com o valor do props

        props.produto ? this.state = { produto: props.produto } : this.state = { produto: [] }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {

        const produto = { ...this.state.produto }
        const input = e.target
        const type = input.type;

        let value = '';

        if (type === 'file') {
            value = urlImg(input, 'imgprod');

        } else if (type === 'checkbox') {
            value = input.checked;

        } else {
            value = input.value;

        }

        produto[input.name] = value;

        this.setState({ produto });
    }

    formProd(e) {
        e.preventDefault();

        let produto = {...this.state.produto}

        if (this.props.edit === 1) {
            editProd(produto);

        } else {
            insertProd(produto);

        }

        produto = this.clearInput(produto);

        this.setState({
            produto
        });

    }

    clearInput(produto) {
        produto.nome_prod = "";
        produto.img_prod = "";
        produto.descricao_prod = "";
        produto.preco_prod = "";
        produto.status_prod = false;
        $('#imgprod').attr("src", DOMAIN_IMG_DEFAULT);

        return produto
    }

    render() {

        var { nome_prod, img_prod, descricao_prod, preco_prod, status_prod } = this.state.produto;

        if (!this.props.show) {
            return null;
        }

        return (

            <div className="view-p" id="view-p">
                <span className="closed" id="closed" onClick={this.props.onClose}>&times;&nbsp;&nbsp;</span>
                <form onSubmit={this.formProd} id="form">
                    <div className="modal-prod">
                        <div className="box-img">
                            <input id="selecao-arquivo"
                                onChange={ this.handleChange }
                                name="img_prod"
                                type="file"
                                accept="image/png, image/jpeg"
                                ref={ this.fileInput } />

                            <img id="imgprod" src={img_prod === undefined || img_prod === '' ? DOMAIN_IMG_DEFAULT : DOMAIN_IMG + img_prod} alt={img_prod} width="200px" height="250px" />
                            <label htmlFor="selecao-arquivo" id="lbl_file">Selecionar um arquivo</label>
                        </div>

                        <div className="">
                            <div className="box-text">

                                <input type="text"
                                    className="inp-modal"
                                    name="nome_prod"
                                    value={nome_prod || ''}
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
                                    value={preco_prod || ''}
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
                                            checked={status_prod || false}
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