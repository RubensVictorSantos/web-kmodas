import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
import './style.css';
import Slide from "../components/slide/slide";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    state = {
        produto: [],
        error: null,
        isLoaded: false,
    }

    componentDidMount() {

        let id = this.getURLParameters('products', window.location.href);

        let url = `${DOMAIN_API}products/id=${id}`
        // let url = `${DOMAIN_API}products/status=1/limit=5`

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        produto: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    getURLParameters(param, url) {
        // eslint-disable-next-line
        param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\/]" + param + "/([^&#]*)";
        var regex = new RegExp(regexS);
        var results;

        //se url não for informada, assume a url corrente da página
        if (typeof url == "undefined") {
            results = regex.exec(window.location.href);

        }
        else {
            results = regex.exec(url);
        }

        if (results == null) {
            return console.log('Results: null');;
        }
        else {

            let id = decodeURI(results[1])

            //Tratar dos caracteres e espaço.
            return id;
        }
    }

    render() {
        const { error, isLoaded, produto } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Fragment>
                    <div className='container-info-prod'>
                        <div className='container-slide-prod'>
                            <Slide produto={produto} />

                        </div>
                        <div className=''>
                        <h3>{produto.nome}</h3>
                        <div>
                            Modelo: {produto.modelo}
                        </div>
                        <div>
                            Cor: {produto.cor}
                        </div>
                        <div>
                            Tamanho: {produto.tamanho}
                            {/* Tamanho: P M G GG XG G2 G3 */}
                        </div>
                        <div>
                            <button> COMPRAR </button>
                        </div>
                        <div>Informações sobre pagamento com boleto</div>
                        <div>Informações sobre o produto<br />
                            Composição....<br />
                            Sobre a estampa....
                        </div>
                        <Link to='/video'>Assista a um vídeo sobre o produto</Link>
                    </div>
                    </div>
                    <div>
                        Tags
                    </div>
                    <div>
                        Slide Com outros produtos
                    </div>
                </Fragment>
            );
        }
    }
}

export default ProductsCont