import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/** */
import './style.css'

export class LeftMenu extends Component {

    render() {
        return (

            <ul className="lf-menu">
                <li className="item-lf-menu"><Link to='/products'>Produtos</Link><span />
                </li>
                <li className="item-lf-menu">
                    <Link to='/category'>Categorias</Link><span></span>
                </li>
                <li className="item-lf-menu">
                    <Link to='/subcategory'>Subcategorias</Link><span></span>
                </li>
                <li className="item-lf-menu">
                    <Link to='/user_level'>Níveis de usuários</Link><span></span>
                </li>
                <li className="item-lf-menu">
                    <Link to='/dashboard'>Dashboard</Link><span></span>
                </li>

            </ul>

        )
    }
}

export default LeftMenu;