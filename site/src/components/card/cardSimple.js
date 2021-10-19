import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export class CardSimple extends Component {

    render() {

        let { image, title, price, path } = { ...this.props };

        return (
            <div className="card">
                <Link to={path} className="card-closed" id="card-prod">

                    <picture className="card-container-image center">
                        <img className="card-image"
                            src={DOMAIN_IMG + image}
                            alt={image} id="card-image" />
                        {/* <div className="ico-heart">
                        <svg version="1.1" viewBox="0 0 100 100">
                            <path style={{ fill: 'rgba(255,50,100,0.3)', stroke: 'rgba(255,0,0,0.9)', strokeLinejoin: 'round', strokeWidth: 0 }}
                                d=" M 70 50  
                                    A 10 10 10 0 0 50 35, 10 10 10 0 0 30 50 
                                    C 30 50 29 50 50 70, 50 70 50 70 70 50 Z "/>

                        </svg>

                    </div> */}
                    </picture>
                    <div className="card-title center">
                        <p>
                            {title}
                        </p>
                    </div>
                    <div className="box-price" id="box-price">
                        <p>
                            R${price}
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
                </Link>
            </div>
        )
    }
}

export default CardSimple;