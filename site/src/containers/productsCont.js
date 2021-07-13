import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
/** */
import './style.css';
import Slide from "../components/slide/slide";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    state = { produto: [] }

    componentDidMount() {
        this.chargeImgCarousel();

    }

    chargeImgCarousel() {

        let id = this.getURLParameters('products', window.location.href)

        this.setState({ produto: [] });

        let url = `${DOMAIN_API}products/id=${id}`

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                this.setState({ produto: result });

            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    getURLParameters(param, url) {
        // eslint-disable-next-line
        param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\/]" + param + "/([^&#]*)";
        var regex = new RegExp(regexS);
        var results;

        //se url não for informada, assume a url corrente da página
        if (typeof url == "undefined"){
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

        let produto = this.state.produto

        return (
            <Fragment>
                <h3>{produto.nome}</h3>
                <div>
                    <Slide produto={produto} />

                </div>
                <div>
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
                <div>
                    Tags
                </div>
                <div>
                    Slide Com outros produtos
                </div>
            </Fragment>
        )
    }
}

export default ProductsCont