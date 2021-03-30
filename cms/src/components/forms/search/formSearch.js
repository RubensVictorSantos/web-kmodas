import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import $ from "jquery";
/** */
import imgSearch from '../../../resources/ico/search.svg';
// import { DOMAIN_API } from '../../../link_config';

export class Search extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    
        this.state = {
            txtSearch: [],
            changeState: this.props.changeState
        }
    }

    handleChange(e) {

        const txtSearch = { ...this.state.txtSearch }
        let value = e.target.value;

        txtSearch[e.target.name] = value;

        this.setState({ txtSearch: txtSearch });
    }

    render() {
        return (
            <div className="form-search content" id="formBuscar">
                <div className="box-search">

                    <label className="lbl-search" htmlFor="txt-search" >
                        <input type="text"
                            name="txt-search"
                            id="txt-search"
                            placeholder="Buscar..."
                            onChange={this.handleChange}
                            required />

                        <span />

                    </label>

                    {/** BOTÃO PESQUISAR PRODUTO*/}

                    <button onClick={() => this.state.changeState(true, this.state.txtSearch)} type='submit' className="btn-search" id="btnSearch">
                        <img src={imgSearch} alt={imgSearch}></img>
                    </button>

                </div>

                {/** BOTÃO NOVO PRODUTO*/}

                <Link to='products/add'>
                    <button className="btn-default" id="btnNew">
                        Novo
                    </button>
                </Link>

            </div>
        )
    }
}