import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/** */
import NavLogo from '../../resources/ico/logo-kmodas.png'
import UserImg from '../../resources/ico/user-circle-fill.png'
import { DOMAIN_API } from '../../link_config.js'
import './style.css'

export class TopMainNavbar extends Component {

    logOut() {
        const url = `${DOMAIN_API}/logout`

        fetch(url)
            .then(res => res.json())
            .then(() => {
                localStorage.clear();
                return window.location.replace('http://localhost:3001');
            })
    }

    render() {

        let user = JSON.parse(localStorage.getItem('user'));  

        return (
            <nav className="top-main-navbar center">
                <div className="container-top-main-navbar center">
                    <Link to='/home' className="link-logo center">
                        <img className="ico-logo" src={NavLogo} alt={'Imagem ' + NavLogo} />
                        K. Modas
                    </Link>

                    <ul>
                        <li><Link to='/products'>Produtos</Link></li>
                        <li><Link to='/user_level'>Níveis de usuários</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>

                    </ul>

                    <div className="field-login center">
                        <img className='ico-user' src={UserImg} alt={'Imagem ' + UserImg} />
                        <p> {user.nome} </p>
                        <button type='submit' onClick={this.logOut} id="btn_logout"></button><label forhtml="btn_logout">Sair</label>
                    </div>
                </div>

            </nav>
        )
    }
}

export default TopMainNavbar;