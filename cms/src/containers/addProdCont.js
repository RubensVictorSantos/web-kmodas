import React, { Component } from "react";
/** */
import FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class AddProdCont extends Component {

    render() {
        return (
            <FormProduct editar={false} />
        )
    }
}

export default AddProdCont;