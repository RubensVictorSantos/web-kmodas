import React, { Component } from "react";
import { Link } from 'react-router-dom';
/** */
import './style.css';

export class ContentHomeCont extends Component {

    render() {
        return (
            <div className="home-main-content center">
                <h1>Bem Vindo!</h1>
                <Link to="products">
                    <div className="box-home center">
                        <h3>Produtos</h3>
                    </div>
                </Link>
                <Link to="user_level">
                    <div className="box-home center">
                        <h3>Níveis de usuários</h3>
                    </div>
                </Link>
                <Link to="dashboard">
                    <div className="box-home center">
                        <h3>Dashboard</h3>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ContentHomeCont;