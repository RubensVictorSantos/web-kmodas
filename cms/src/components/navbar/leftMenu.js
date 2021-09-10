import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/** */
import './style.css'

export class LeftMenu extends Component {

    render() {
        return (

            <ul className="left-menu">
                <li><Link to='/products'>Produtos</Link><span />
                    <ul>
                        <li><Link to='/attributes'>Atributos</Link><span></span></li>
                    </ul>
                </li>
                <li><Link to='/category'>Categorias</Link><span></span></li>
                <li><Link to='/subcategory'>Subcategorias</Link><span></span></li>
                <li><Link to='/user_level'>Níveis de usuários</Link><span></span></li>
                <li><Link to='/dashboard'>Dashboard</Link><span></span></li>

            </ul>

        )
    }
}

export default LeftMenu;