import React, { Component } from "react";
import { Link } from 'react-router-dom';
/** */
import imgSearch from '../../../resources/ico/search.svg';
import './style.css'

export class Search extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            txtSearch: [],
            changeState: this.props.changeState
        }
    }

    handleChange(e) {

        const txtSearch = { ...this.state.txtSearch }
        let value = e.target.value;

        txtSearch[e.target.name] = value;

        this.state.changeState(true, txtSearch)

    }

    render() {
        return (

            <div className="form-search container" id="formBuscar">
                <div className="content-search">

                    <label className="lbl-search" htmlFor="txt-search" >
                        <input type="text" name="txt-search" id="txt-search" placeholder="Buscar..." onChange={this.handleChange} required />
                        <span />

                    </label>

                    {/** BOTÃO PESQUISAR PRODUTO*/}
                    <button type='submit' className="btn-search btn-default" id="btnSearch">
                        <img src={imgSearch} alt={imgSearch}></img>
                    </button>

                </div>

                {/** BOTÃO NOVO PRODUTO*/}
                <Link to='products/add'>
                    <button onClick={() => localStorage.removeItem('produto')} className="btn-default" id="btnNew">
                        &#43; ADICIONAR
                    </button>
                </Link>

            </div>
        )
    }
}