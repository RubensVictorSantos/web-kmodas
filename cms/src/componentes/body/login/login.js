import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import $ from 'jquery';
/** */
import Imglogo from '../../../recursos/ico/logo-kmodas.png'
import './style.css'

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    user: {
        email: '',
        senha: '',
    },
}

export const TOKEN_KEY = "token";

export class Login extends Component {
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

        const url = `http://127.1.1.0:3333/login`
        const { email, senha } = { ...this.state.user }

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            header: 'x-access-token',
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {

                if (result.token !== undefined){

                    const { usuario, token, auth} = result

                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('auth', JSON.stringify(auth));
    
                    window.location.replace('http://localhost:3000/Produto');

                } else {
                    window.location.replace('http://localhost:3000/');

                }
            },
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
                        <label for="txtEmail">Email Address</label>
                        <input id="txtEmail" name="email" onChange={this.handleChange} type="e-mail"></input>

                        <label for="txtPassword">Password</label>
                        <input id="txtPassword" name="senha" onChange={this.handleChange} type="password"></input>

                        <div className="chk-login">
                            <input id="chkLogin" type="checkbox" /><label for="chkLogin">Remember me</label>

                            <Link to="/">Forgot password?</Link>
                        </div>

                        <button type="submit">Entrar</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(Login)