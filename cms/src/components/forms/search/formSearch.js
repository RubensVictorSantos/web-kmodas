import React, { Component } from "react";
import { Link } from 'react-router-dom';
/** */
import imgSearch from '../../../resources/ico/search.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../../actions';
import './style.css'

class Search extends Component {
    state = {
        inputValue: ''
    }
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        const {
            clickButton,
            newValue
        } = this.props;
        const { inputValue } = this.state;

        return (

            <div className="form-search container" id="formBuscar">
                <div className="content-search">

                    <label className="lbl-search" htmlFor="txt-search" >
                        <input type="text" name="txt-search" id="txt-search" placeholder="Buscar..." onChange={this.inputChange} value={inputValue} required />
                        <span />

                    </label>

                    {/** BOTÃO PESQUISAR PRODUTO*/}
                    <button type='submit' onClick={() => clickButton(inputValue)} className="btn-search btn-default" id="btnSearch">
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

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);