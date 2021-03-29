import React, { Component } from "react";
/** */
import  FormProduct from "../components/forms/produto/formProduto";
import './style.css';

export class AddProdCont extends Component {

    render() {
        return (
            <div className="content">
                <FormProduct editar={false}/>
            </div>
        )
    }
}

export default  AddProdCont;