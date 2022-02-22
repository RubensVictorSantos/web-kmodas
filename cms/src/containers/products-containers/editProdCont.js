import React, { Component } from "react";
/** */
import FormProduct from "../../components/forms/produto/formProduto";
import './style.css';

export class EditProdCont extends Component {
    render() {
        let id = this.props.match.params.id;
        return (<FormProduct id={id} />)
    }
}

export default EditProdCont