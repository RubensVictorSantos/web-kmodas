import React, { Component } from "react";
import { Fragment } from "react";
import BtnPrevPage from "../../components/buttons/btnPrevPage";
/** */
import FormProduct from "../../components/forms/produto/formProduto";
import './style.css';

export class AddProdCont extends Component {

    render() {
        return (
            <Fragment>
                <BtnPrevPage {...this.props} />
                <h1>ADICIONAR PRODUTO</h1>
                <FormProduct />
            </Fragment>
        )
    }
}

export default AddProdCont;