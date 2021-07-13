import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
/** */
import logo from '../../resources/img/logo-ladybirds.png';
import imgUser from '../../resources/img/user.svg';
import imgSearch from '../../resources/img/search-black.svg';
import './style.css';

const Navbar = () => {

    const [open, setOpen] = useState(true);

    const removeClass = (open) => (open ? 'menu-close' : 'menu-open');

    return (
        <Fragment>
            <nav className="navbar">

                {/************************* LOGO *************************/}

                <div>
                    <input onClick={() => setOpen(false)} type='button' className="btn-menu " id="btn-menu" />

                    <Link to="/home">
                        <img className="nav-logo" src={logo} alt="Logo K. Modas" />
                    </Link>

                    <input type='button' className="btn-cart " id="btn-cart" />

                </div>

                {/************************* SEARCH *************************/}

                <div className="container-search">
                    <div>
                        {/** BOTÃO PESQUISAR PRODUTO*/}

                        <button type='submit' className="center btn-search" id="btnSearch">
                            <img src={imgSearch} alt={imgSearch}></img>
                        </button>

                        <label className="lbl-search" htmlFor="txt-search" >

                            <input type="text"
                                name="txt-search"
                                id="txt-search"
                                placeholder="O que você procura?"
                                required /><span className="center" />

                        </label>

                    </div>

                </div>

                {/************************* MENU *************************/}

                <ul className={`menu ${removeClass(open)}`} id="menu">
                    <span onClick={() => setOpen(true)} className="close" id="close">&times;&nbsp;&nbsp;</span>

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
            </nav>
        </Fragment>
    )
}

export default Navbar;