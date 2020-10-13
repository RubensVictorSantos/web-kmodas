import React, { Component } from 'react';
import DOMAIN_IMG from '../../../link_config'
export class CardProd extends Component {
    constructor(props){
        super()


    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="card-closed" id="card-prod">
                <div className="title-card">
                    <p>
                        {
                            this.props.produto.nome_prod
                        }
					</p>
                </div>
                <picture className="box-img-card">
                    <img src={
                        DOMAIN_IMG + this.props.produto.img_prod
                        } alt={ DOMAIN_IMG + this.props.produto.img_prod } id="img-prod" className="img-prod" />

                </picture>
                <div className="box-price" id="box-price">
                    <p> 
                        {
                            'R$' + this.props.produto.preco_prod
                        }
                    </p>
                </div>
                <div className="view-card">
                    <h3>
                    </h3>
                    <button className="add-cart">
                        <img src="ico/ico-cart-round.svg" alt={ "Imagem cart" } className="ico-cart" />
                        <p>COMPRAR </p>
                    </button>
                </div>
            </div>
        )
    }
}