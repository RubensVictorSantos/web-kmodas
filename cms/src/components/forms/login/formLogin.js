import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import $ from 'jquery';
/** */
import Imglogo from '../../../resources/ico/logo-kmodas.png'
import { DOMAIN_API } from '../../../link_config';
import './style.css'

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    user: {
        email: '',
        senha: '',
    },
}

export const TOKEN_KEY = "token";

export class FormLogin extends Component {
    constructor(props) {
        super();

        this.enviaFormulario = this.enviaFormulario.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //STATE ESTÁ RECEBENDO OS ESTADOS INICIAIS
    state = { ...initialState }

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

    async enviaFormulario(e) {

        e.preventDefault();

        const url = `${ DOMAIN_API }/login`
        const { email, senha } = { ...this.state.user }

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            header: 'x-access-token',
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {

                if (result.token){

                    const { user, token, auth} = result

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('auth', JSON.stringify(auth));

                    this.props.history.push("/home");

                } else {
                    alert('Login e/ou senha incorreto')

                }
            }.bind(this),
            error: function (request, status, error) {

                if (request.status === 404) {
                    alert("Usuário invalido!");

                }
            }
        });
    }


    render() {
        return (
            <div className="container-login">
                <form onSubmit={this.enviaFormulario} className="box-login">
                    <img src={Imglogo} alt={'Imagem ' + Imglogo} className="img-login"></img>
                    <h1>K. Modas</h1>

                    <div className="input-login">
                        <label htmlFor="txtEmail">Email Address</label>
                        <input id="txtEmail" name="email" onChange={this.handleChange} type="e-mail"></input>

                        <label htmlFor="txtPassword">Password</label>
                        <input id="txtPassword" name="senha" autoComplete="new-password" onChange={this.handleChange} type="password"></input>

                        <div className="chk-login">
                            <input id="chkLogin" type="checkbox" /><label htmlFor="chkLogin">Remember me</label>

                            <Link to="/">Forgot password?</Link>
                        </div>

                        <button type="submit">Entrar</button>
                    </div>
                    <input type="text" name="email" value="..." autoComplete="username email" style={{display: 'none'}}></input>
                </form>
            </div>
        )
    }
}

export default withRouter(FormLogin)