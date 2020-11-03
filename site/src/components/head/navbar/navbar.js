import React, { Component, Fragment } from 'react';
import $ from 'jquery';
/** */
import '../../../css/style.css';
import imgUser from '../../../ico/ico-user.svg';

export class Navbar extends Component {

    componentDidMount() {
        this.openMenu()
    }

    openMenu = () => {
        /** Abrir Menu Mobile*/
        $('.btn-menu').on('click', () => {
            $("#modal-menu").removeClass("modal-close");
            $("#modal-menu").addClass("modal-open")
        });

        $('#close').on('click', () => {
            $("#modal-menu").removeClass("modal-open");
            $("#modal-menu").addClass("modal-close");
        });
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <ul className="menu">
                        <li className="item">HOME</li>
                        <li className="item">PRODUTOS</li>
                        <li className="item">GALERIAS</li>
                        <li className="item">CONTATOS</li>

                    </ul>
                </nav>

                <nav className="navbar-mobile ">
                    <button className="btn-menu " id="btn-menu"></button>

                    <div className="modal-close" id="modal-menu">
                        <ul className="menu" id="menu">
                            <li>
                                <div className="view-user">
                                    <div className="img-user">
                                        <img src={imgUser} alt={'Imagem ' + imgUser} className="img" />

                                    </div>

                                    <div>
                                        <label>Olá, visitante!</label><br />
                                        {/* <Link to="#">Logar</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li className="item">HOME</li>
                            <li className="item">PRODUTOS</li>
                            <li className="item">GALERIAS</li>
                            <li className="item">CONTATOS</li>

                        </ul>

                        <span className="" id="close">&times;&nbsp;&nbsp;</span>

                    </div>

                </nav>
            </Fragment>
        )
    }
}

export default Navbar;