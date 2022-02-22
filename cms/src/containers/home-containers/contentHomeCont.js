import React, { Component } from "react";
import { Link } from 'react-router-dom';
/** */
import './style.css';
import imgProduct from '../../resources/ico/package.png'
import imgUser from '../../resources/ico/user.png'
import imgSpeedometer from '../../resources/ico/business-report.png'


export class ContentHomeCont extends Component {

    render() {
        return (
            <div className="home-main-content center">
                <h1>Bem Vindo!</h1>
                <div className="box-home center">

                    <img src={imgProduct}>
                    </img>

                    <Link to="products">
                        <h3>Produtos</h3>
                    </Link>

                    <nav>
                        <Link to="products">
                            &#10095; Lista de Produtos
                        </Link>
                        <Link to="products/add">
                            &#10095; Adicionar Produto
                        </Link>
                        <Link to="products/edit">
                            &#10095; Editar Produto
                        </Link>
                    </nav>
                </div>
                <div className="box-home center">
                    <img src={imgUser}>
                    </img>
                    <Link to="user_level">
                        <h3>Usuários</h3>
                    </Link>
                    <nav>
                        <Link to="user_level">
                            &#10095; Lista de Usuários
                        </Link>
                        <Link to="products/add">
                            &#10095; Adicionar Usuário
                        </Link>
                        <Link to="products/edit">
                            &#10095; Editar Usuário
                        </Link>
                    </nav>
                </div>
                <div className="box-home center">
                    <img src={imgSpeedometer}>
                    </img>
                    <Link to="dashboard">
                        <h3>Dashboard</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ContentHomeCont;