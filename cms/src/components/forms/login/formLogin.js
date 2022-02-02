import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
/** */
import Imglogo from '../../../resources/ico/logo-kmodas.png'
import { DOMAIN_API } from '../../../link_config';
import './style.css'
import { postData } from '../../modulos';

export const TOKEN_KEY = "token";

export class FormLogin extends Component {
    constructor(props) {
        super();

        this.enviaFormulario = this.enviaFormulario.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        user: {
            email: '',
            senha: '',
        },
        error: null,
        status: null
    }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired

    };

    handleChange(e) {
        const user = { ...this.state.user }
        const input = e.target
        let value = input.value

        user[input.name] = value;

        this.setState({ user });
    }

    enviaFormulario(e) {

        e.preventDefault();

        const url = `${DOMAIN_API}/login`
        const { email, senha } = { ...this.state.user }

        postData(url, { email: email, senha: senha })
            .then(data => {

                if (data.token) {

                    const { user, token, auth } = data

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('auth', JSON.stringify(auth));
                    
                    this.props.history.push("/home");

                } else {
                    window.alert('Usuário e/ou senha invalido(s)')

                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return (
            <div className="login-container center">
                <form onSubmit={this.enviaFormulario} className="login-form center">
                    <img src={Imglogo} alt={'Imagem ' + Imglogo} className="login-img"></img>
                    <h1>K. Modas</h1>
                    <input type="text" name="name" ng-hide="true" defaultValue="..." autoComplete="username" style={{ display: 'none' }}></input>

                    <div className="login-input">
                        <label htmlFor="txtEmail">Email Address</label>
                        <input id="txtEmail" name="email" onChange={this.handleChange} type="email" autoComplete="email"></input><span></span>

                        <label htmlFor="txtPassword">Password</label>
                        <input id="txtPassword" name="senha" autoComplete="new-password" onChange={this.handleChange} type="password"></input><span></span>

                        <div className="login-chk">
                            <input id="chkLogin" type="checkbox" /><label htmlFor="chkLogin">Remember me</label>

                            <Link to="/">Forgot password?</Link>
                        </div>

                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(FormLogin)