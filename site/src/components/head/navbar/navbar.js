import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom'
import $ from 'jquery';
/** */
import logo from '../../../ico/logo.svg';
import './style.css';
import imgUser from '../../../ico/user.svg';

export class Navbar extends Component {

    componentDidMount() {
        this.openMenu()
    }

    openMenu = () => {
        /** Abrir Menu Mobile*/
        $('.btn-menu').on('click', () => {
            $("#sub-menu").removeClass("menu-close");
            $("#sub-menu").addClass("menu-open")
        });

        $('#close').on('click', () => {
            $("#sub-menu").removeClass("menu-open");
            $("#sub-menu").addClass("menu-close");
        });
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <ul>
                        <li>
                            <ul className="menu">
                                <li className="item">
                                    <button className="btn-menu btn-nav" id="btn-menu"></button>
                                    
                                </li>
                                <li className="item">
                                    <img src={logo} alt={'Imagem ' + logo} className="img" width="100%"/>
                                    
                                </li>
                                <li className="item">
                                <ul className="sub-menu menu-close" id="sub-menu">
                                        <li className="sub-item">
                                            <div className="view-user">
                                                <div className="img-user">
                                                    <img src={imgUser} alt={'Imagem ' + imgUser} className="img" />

                                                </div>

                                                <div>
                                                    <label>Olá, visitante!</label>
                                                </div>
                                            </div>
                                            <span className="close" id="close">&times;&nbsp;&nbsp;</span>
                                        </li>
                                        <li className="sub-item">HOME</li>
                                        <li className="sub-item">PRODUTOS</li>
                                        <li className="sub-item">GALERIAS</li>
                                        <li className="sub-item">CONTATOS</li>
                                    </ul>
                                
                                </li>
                                <li className="item">
                                    <button className="btn-cart btn-nav" id="btn-cart"></button>
                                </li>
                            </ul>
                        </li>
                        <li style={{height: '40px'}}>
                            <input className="inp-search" type="search" placeholder="O que você procura?"/>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;