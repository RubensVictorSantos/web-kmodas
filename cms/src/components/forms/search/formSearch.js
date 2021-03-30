import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
/** */
import imgSearch from '../../../resources/ico/search.svg';
import { DOMAIN_API } from '../../../link_config';

export class Search extends Component {
    constructor(props) {
        super(props)

        this.buscarProdId = this.buscarProdId.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {click : this.props.onClick}

    }

    handleChange(e) {

        const input = { ...this.state.input }
        let value = '';

        value = e.target.value;

        input[e.target.name] = value;

        this.setState({ input });
    }

    buscarProdId(e){
        e.preventDefault();

        console.log( this.state.click)

        // const url = `${DOMAIN_API}/prodId/${e}`;

        // $.ajax({
        //     url: url,
        //     type: 'GET',
        //     dataType: 'json',
        //     contentType: 'application/json',
        //     success: (result) => {
                
        //         alert(result)

        //         return result
                
        //     }
        // })
    }

    render() {
        return (
            <form className="form-search content" onSubmit={this.buscarProdId} id="formBuscar">
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
                    
                    <button type='submit' onClick={() => this.props.onClick} className="btn-search" id="btnSearch">
                    
                    <img src={imgSearch} alt={imgSearch}></img>
                    </button>

                </div>

                <Link to='products/add'>
                    <button onClick={this.state.onClick} className="btn-default" id="btnNew">Novo</button>
                </Link>

            </form>
        )
    }
}