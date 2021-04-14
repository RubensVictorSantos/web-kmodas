import React, { Component, Fragment} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
/** */
import './style.css';
import Slide from "../components/slide/slide";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    state = {produto: []}

    componentDidMount(){
        this.chargeImgCarousel(5);    
    }

    chargeImgCarousel(itensCarousel) {

        this.setState({ produto: [] });

        let url = `${DOMAIN_API}prod-LimitedNumber/` + itensCarousel

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

    render() {
        
        let produto = this.state.produto.map( prod => prod)

        return (
            <Fragment>
                <h3> NOME DO PRODUTO</h3>
                <div>
                    <Slide produto={produto}/>

                </div>
                <div>
                    <div>
                        Modelo: Masculino
                    </div>
                    <div>
                        Cor: Preta
                    </div>
                    <div>Tamanho: P M G GG XG G2 G3</div>
                    <div>
                        <button> COMPRAR </button>
                    </div>
                    <div>Informações sobre pagamento com boleto</div>
                    <div>Informações sobre o produto<br/>
                        Composição....<br/>
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