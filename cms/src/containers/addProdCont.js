import React, { Component } from "react";
/** */
import  FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class AddProdCont extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="center">
                <FormProduct editar={false}/>
            </div>
        )
    }
}

export default  AddProdCont;