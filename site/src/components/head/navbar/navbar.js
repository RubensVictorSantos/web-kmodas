import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';
/** */
// import '../../../css/style.css';
import './style.css';
import imgUser from '../../../ico/ico-user.svg';

export class Navbar extends Component {

    componentDidMount() {
        this.openMenu()
    }

    openMenu = () => {
        /** Abrir Menu Mobile*/
        $('.btn-menu').on('click', () => {
            $("#menu").removeClass("modal-close");
            $("#menu").addClass("modal-open")
        });

        $('#close').on('click', () => {
            $("#menu").removeClass("modal-open");
            $("#menu").addClass("modal-close");
        });
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    {/* <button className="btn-menu " id="btn-menu"></button> */}

                    <ul className="menu">
                        <li className="item">HOME</li>
                        <li className="item">PRODUTOS</li>
                        <li className="item">GALERIAS</li>
                        <li className="item">CONTATOS</li>

                    </ul>

                    {/* <span className="close" id="close">&times;&nbsp;&nbsp;</span> */}
                </nav>

                <nav className="navbar-mobile ">
                    <button className="btn-menu " id="btn-menu"></button>

                    {/* <div className="modal-close" id="modal-menu"> */}
                        <ul className="menu modal-close" id="menu">
                            <li className="">
                                <div className="view-user">
                                    <div className="img-user">
                                        <img src={imgUser} alt={'Imagem ' + imgUser} className="img" />

                                    </div>

                                    <div>
                                        <label>Olá, visitante!</label>
                                        
                                        {/* <Link to="#">Logar</Link> */}
                                        <Link></Link>
                                    </div>
                                </div>
                                <span className="close" id="close">&times;&nbsp;&nbsp;</span>

                            </li>
                            <li className="item">HOME</li>
                            <li className="item">PRODUTOS</li>
                            <li className="item">GALERIAS</li>
                            <li className="item">CONTATOS</li>
                        </ul>
                    {/* </div> */}

                </nav>
            </Fragment>
        )
    }
}

export default Navbar;