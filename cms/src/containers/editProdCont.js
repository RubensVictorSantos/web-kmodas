import React, { Component } from "react";
/** */
import './style.css';
import FormProduct from "../components/forms/produto/formProduto";

export class EditProdCont extends Component {
    constructor(props) {
        super();

        this.state = {produto: JSON.parse(localStorage.getItem("produto"))}
    }

    render() {
        return (
            <div className="center">
                <FormProduct produto={ this.state.produto} editar={true}/>
            </div>
        )
    }
}

export default EditProdCont