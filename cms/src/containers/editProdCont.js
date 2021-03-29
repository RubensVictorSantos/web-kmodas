import React, { Component } from "react";
/** */
import FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class EditProdCont extends Component {
    constructor(props) {
        super();

        this.state = {produto: JSON.parse(localStorage.getItem("produto"))}
    }

    render() {
        return (
            <div className="content">
                <FormProduct produto={ this.state.produto} editar={true}/>
            </div>
        )
    }
}

export default EditProdCont