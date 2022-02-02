import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
/** */
import imgLogo from '../../resources/img/logo-ladybirds.png';
import imgUser from '../../resources/img/user.svg';
import imgSearchWhiteR from '../../resources/img/search-white-right.svg';
import imgCart from '../../resources/img/cart-round.svg';
import './style.css';

const FieldSearch = (props) => {
    return (
        <div className={`nav-field-search ${props.style}`} >
            <button type='submit'></button>

            <input type="text"
                name="txt-search"
                id="txt-search"
                placeholder="O que você procura?"
                required />
            <label htmlFor="txt-search" ></label>

        </div>
    )

}

const Navbar = () => {
    const [classSidebar, setClassSidebar] = useState('closed-sidebar'),
        [classFieldSearch, setClassFieldSearch] = useState("nav-field-search-closed")

    const openSidebar = () => {
        if (classSidebar === 'closed-sidebar') {
            setClassSidebar("")

        } else {
            setClassSidebar("closed-sidebar")

        }
    }
    const openFieldSearch = () => {
        if (classFieldSearch === 'nav-field-search-closed') {
            setClassFieldSearch("nav-field-search")

        } else {
            setClassFieldSearch("nav-field-search-closed")

        }
    }

    return (
        <Fragment>
            <nav className="navbar">
                <div>
                    <button className="nav-btn-menu nav-btn-default" onClick={() => openSidebar()}>&#9776;</button>

                    {/** Logo */}
                    <Link to="/home">
                        <img className="nav-logo" src={imgLogo} alt="Logo K. Modas" />
                    </Link>
                    <img className="nav-img-search nav-btn-default"
                        onClick={() => openFieldSearch()}
                        src={imgSearchWhiteR}
                        alt={imgSearchWhiteR}
                        role="button"
                        tabIndex="0" />
                    <button className="nav-btn-cart nav-btn-default">
                        <img src={imgCart} alt={imgCart} />
                    </button>

                    {/** Field Search */}
                    <FieldSearch style={classFieldSearch} />

                </div>

                {/** Sidebar */}
                <ul className={`sidebar ${classSidebar}`} >
                    <li className="sidebar-item">
                        <img className="sidebar-avatar" src={imgUser} alt={'Imagem ' + imgUser} />
                        <div>
                            <label>Olá, visitante!</label>
                            <Link to=''>Login &#10095;</Link>
                        </div>
                        <span onClick={() => openSidebar()} >&times;</span>
                    </li>
                    <li className="sidebar-item">TODOS OS PRODUTOS</li>
                    <li className="sidebar-item">MASCULINO</li>
                    <li className="sidebar-item">FEMININO</li>
                    <li className="sidebar-item">ACESSÓRIOS</li>
                    <li className="sidebar-item">COLEÇÕES</li>
                    <li className="sidebar-item">GALERIA</li>
                    <li className="sidebar-item">CONTATO</li>

                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar;