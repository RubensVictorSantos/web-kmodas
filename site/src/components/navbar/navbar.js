import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
/** */
import logo from '../../resources/img/logo-ladybirds.png';
import imgUser from '../../resources/img/user.svg';
import './style.css';

export class Navbar extends Component {

    componentDidMount() {
        this.openMenu()
    }

    openMenu = () => {
        /** Abrir Menu Mobile*/
        $('.btn-menu').on('click', () => {
            $("#menu").removeClass("menu-close");
            $("#menu").addClass("menu-open")
        });

        $('#close').on('click', () => {
            $("#menu").removeClass("menu-open");
            $("#menu").addClass("menu-close");
        });
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar">
                        {/************************* MENU *************************/}

                        <ul className="menu menu-close" id="menu">
                            <span className="close" id="close">&times;&nbsp;&nbsp;</span>
                            
                            <li className="item">
                                <div className="view-user">
                                    <div className="img-user">
                                        <img className="img" 
                                        src={imgUser} 
                                        alt={'Imagem ' + imgUser} />

                                    </div>

                                    <div>
                                        <label>Olá, visitante!</label>
                                    </div>
                                </div>
                            </li>
                            <li className="item">HOME</li>
                            <li className="item">PRODUTOS</li>
                            <li className="item">GALERIAS</li>
                            <li className="item">CONTATOS</li>

                        </ul>

                        {/************************* LOGO *************************/}

                        <div>
                            <input type='button' className="btn-menu " id="btn-menu" />

                            <Link to="/home">
                                <img className="nav-logo" src={logo} alt="Logo K. Modas" />
                            </Link>

                            <input type='button' className="btn-cart " id="btn-cart" />

                        </div>

                        {/************************* SEARCH *************************/}

                        <div className="container-search">
                            <input type="search" placeholder="O que você procura?" />
                        </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;