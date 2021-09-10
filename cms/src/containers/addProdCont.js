import React, { Component } from "react";
import { Fragment } from "react";
/** */
import FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class AddProdCont extends Component {

    render() {
        return (
            <Fragment>
                <h1>ADICIONAR PRODUTO</h1>
                <FormProduct editar={false} />
            </Fragment>
        )
    }
}

export default AddProdCont;