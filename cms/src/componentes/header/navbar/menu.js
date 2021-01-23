import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
/** */
import './style.css'
import NavLogo from '../../../recursos/ico/logo-kmodas.png'
import UserImg from '../../../recursos/ico/user-circle-fill.png'

export class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container-nav">
                    <Link to='/' className="link-logo">
                        <img className="ico-logo" src={NavLogo} alt={'Imagem ' + NavLogo} />
                        K. Modas
                    </Link>

                    <ul>
                        <li><Link to='/Produto'>Produtos</Link></li>
                        {/* <li><Link to='/Produto'>Produtos</Link></li>
                        <li><Link to='/Produto'>Produtos</Link></li> */}
                    </ul>

                    <div className="field-login">
                        <img className='ico-user' src={UserImg} alt={'Imagem ' + UserImg}></img>
                        Rubens Victor 
                        <button type='submit'>Logout</button>    
                    </div>
                </div>

            </nav>
        )
    }
}

export default Navbar;