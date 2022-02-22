import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

const CardSimple = (props) => {
    let { image, title, path } = { ...props };
    let priceFormat = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    }).format(props.price);

    let separatorIndex = priceFormat.indexOf(','),
        price = priceFormat.slice(0, separatorIndex),
        lasttwo = priceFormat.slice(separatorIndex + 1);

    return (
        <div className="card">
            <Link to={path}>

                <picture className="card-container-image center">
                    <img className="card-image"
                        src={DOMAIN_IMG + image}
                        alt={image} id="card-image" />

                </picture>
                <hr></hr>
                <div className="card-price-default">
                    <p>{price} <sup>{lasttwo}</sup></p>
                    <div>
                        ou 5x de R$&nbsp;51,74 sem juros
                    </div>
                </div>
                <div className="card-title">
                    <p>{title}</p>
                </div>
                <div className="card-frete">
                    <p>Frete grátis</p>
                </div>
            </Link>
        </div>
    )
}

export default CardSimple;