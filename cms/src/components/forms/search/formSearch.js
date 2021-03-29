import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
/** */
import imgSearch from '../../../resources/ico/search.svg';
import { DOMAIN_API } from '../../../link_config';

export class Search extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);

    }

    state = {
        input: [],
    }

    handleChange(e) {

        const input = { ...this.state.input }
        let value = '';

        value = e.target.value;

        input[e.target.name] = value;

        this.setState({ input });
    }

    buscarProdId = (id) => {

        

        console.log(id)

        const url = `${DOMAIN_API}/prodId/${id}`;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                
                alert(result)

                return result
                
            }
        })
    }

    render() {
        return (
            <form className="form-search content" onSubmit={this.formProd} id="formBuscar">
                <div className="box-search">

                    <label htmlFor="txt-search" className="lbl-search">
                        <input className=""
                            type="text"
                            name="txt-search"
                            id="txt-search"
                            placeholder="Buscar..."
                            onChange={this.handleChange}
                            required />
                        <span />

                    </label>
                    <button type='submit' className="btn-search" id="btnSearch">
                        <img src={imgSearch} alt={imgSearch}></img>
                    </button>

                </div>

                <Link to='products/add'>
                    <button className="btn-default" onClick={(e) => {this.buscarProdId(e)}} id="btnNew">Novo</button>
                </Link>

            </form>
        )
    }
}