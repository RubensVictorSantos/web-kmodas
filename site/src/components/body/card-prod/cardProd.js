import React, { Component } from 'react';
/** */
import Img_like from './../../../ico/ico-heart.svg'
import DOMAIN_IMG from '../../../link_config'
export class CardProd extends Component {
    constructor(props) {
        super()

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="card-closed" id="card-prod">
                <picture className="box-img-card">
                    <img src={
                        DOMAIN_IMG + this.props.produto.img_prod
                        } alt={ DOMAIN_IMG + this.props.produto.img_prod } id="img-prod" className="img-prod">
                            
                    </img>
                    <div className="ico-heart">
                        
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <g fill="transparent" stroke="rgba(255,0,0,0.9)" strokeLinejoin="round" strokeWidth="0" >
                                <circle cx="50" className="img" cy="46.5" r="35" fill="rgba(255,255,255,0.2)" />
                                <path d=" M 70 50  A 10 10, 10, 0 0, 50 35  A 10 10, 10, 0 0, 30 50 C 30 50 29 50 50 70C 50 70 50 70 70 50Z " fill="rgba(255,50,100,0.3)"/>
                            </g>
                        </svg>

                    </div>
                </picture>
                <div className="title-card">
                    <p>
                        {
                            this.props.produto.nome_prod
                        }
					</p>
                </div>
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
            </div >
        )
    }
}