import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
/** */
import './style.css'
import NavLogo from '../../../recursos/ico/logo-kmodas.png'
import UserImg from '../../../recursos/ico/user-circle-fill.png'

export class Navbar extends Component {
    constructor(props){
        super()
    }

    logOut(){

        const url = `http://127.1.1.0:3333/logout`

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                localStorage.clear();

                return window.location.replace('http://localhost:3000/');

            }
        })
    }

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
                        <button type='submit' onClick={this.logOut}></button>    
                    </div>
                </div>

            </nav>
        )
    }
}

export default Navbar;