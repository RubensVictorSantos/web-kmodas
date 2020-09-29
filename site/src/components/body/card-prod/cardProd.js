import React, { Component } from 'react';

export class CardProd extends Component {
    constructor(){
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
                        this.props.produto.img_prod
                        } id="img-prod" className="img-prod" />

                </picture>
                <div className="box-price" id="box-price">
                    <p> 
                        {
                            this.props.produto.preco_prod
                        }
                    </p>
                </div>
                <div className="view-card">
                    <h3>
                    </h3>
                    <button className="add-cart">
                        <img src="ico/ico-cart-round.svg" className="ico-cart" />
                        <p>COMPRAR </p>
                    </button>
                </div>
            </div>
        )
    }
}