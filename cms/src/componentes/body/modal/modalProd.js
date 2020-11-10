import React, { Component } from 'react'
import PropTypes from 'prop-types'
/** */
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';
import { urlImg, clearInput, editProd, insertProd } from '../modulos';
import './style.css' 
// import ContainerContent from '../containerContent';

export class ModalProd extends Component {
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

        let produto = { ...this.state.produto }

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

        if (!this.props.show) {
            return false;
        }

        return (

            <div className="view-produto" id="view-p">
                <span className="close" id="closed" onClick={this.props.onClose}>&times;</span>
                <form onSubmit={this.formProd} id="form">
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