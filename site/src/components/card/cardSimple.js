import React, { Component, Fragment } from 'react';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export class CardSimple extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
                <picture className="box-img-card">
                    <img className="img-prod" src={DOMAIN_IMG + this.props.image} 
                        alt={DOMAIN_IMG + this.props.image} id="img-prod"/>
                    {/* <div className="ico-heart">
                        <svg version="1.1" viewBox="0 0 100 100">
                            <path style={{ fill: 'rgba(255,50,100,0.3)', stroke: 'rgba(255,0,0,0.9)', strokeLinejoin: 'round', strokeWidth: 0 }}
                                d=" M 70 50  
                                    A 10 10 10 0 0 50 35, 10 10 10 0 0 30 50 
                                    C 30 50 29 50 50 70, 50 70 50 70 70 50 Z "/>

                        </svg>

                    </div> */}
                </picture>
                <div className="title-card">
                    <p>
                        {this.props.title}
                    </p>
                </div>
                <div className="box-price" id="box-price">
                    <p>
                        R${this.props.price}
                    </p>
                </div>
                <div className="view-card">
                    <h3>
                    </h3>
                    <button className="add-cart">
                        <img src="ico/ico-cart-round.svg" alt={"Imagem cart"} className="ico-cart" />
                        <p>COMPRAR </p>
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default CardSimple;