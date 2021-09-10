import React, { Component } from "react";
import { Fragment } from "react";
/** */
import FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class EditProdCont extends Component {
    constructor(props) {
        super();

        this.state = { produto: JSON.parse(localStorage.getItem("produto")) }
    }

    render() {

        let produto = this.state.produto;

        return (
            <Fragment>
                <h2>EDITAR {produto.nome}</h2>
                <FormProduct produto={produto} editar={true} />

            </Fragment>
        )
    }
}

export default EditProdCont