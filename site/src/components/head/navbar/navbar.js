import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
/** */
import logo from '../../../resources/img/logo-ladybirds.png';
import './style.css';
import imgUser from '../../../resources/img/user.svg';

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
                    <div>
                        {/************************* MENU *************************/}

                        <ul className="sub-menu menu-close" id="sub-menu">
                            <li className="sub-item">
                                <div className="view-user">
                                    <div className="img-user">
                                        <img className="img" src={imgUser} alt={'Imagem ' + imgUser} />

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

                        {/************************* LOGO *************************/}

                        <div>
                            <span className="btn-menu btn-nav" id="btn-menu" />

                            <Link to="/home">
                                <img className="nav-logo" src={logo} alt="Logo K. Modas" />
                            </Link>

                            <span className="btn-cart btn-nav" id="btn-cart" />

                        </div>


                        {/************************* SEARCH *************************/}

                        <div className="container-search">
                            <input type="search" placeholder="O que você procura?" />
                        </div>

                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;