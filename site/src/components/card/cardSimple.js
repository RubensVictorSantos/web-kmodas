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
                <Link to={path}>

                    <picture className="card-container-image center">
                        <img className="card-image"
                            src={DOMAIN_IMG + image}
                            alt={image} id="card-image"/>

                    </picture>
                    <div className="box-price">
                        <p>
                            R$ {price}
                        </p>
                    </div>
                    <div className="card-title">
                        <p>
                            {title}
                        </p>
                        <scan>

                        </scan>
                        {/* <div className="ico-heart">
                            <svg version="1.1" viewBox="0 0 100 100">
                                <path style={{ fill: 'rgba(255,50,100,0.3)', stroke: 'rgba(255,0,0,0.9)', strokeLinejoin: 'round', strokeWidth: 0 }}
                                    d=" M 70 50  
                                        A 10 10 10 0 0 50 35, 10 10 10 0 0 30 50 
                                        C 30 50 29 50 50 70, 50 70 50 70 70 50 Z "/>

                            </svg>

                        </div> */}
                    </div>
                </Link>
            </div>
        )
    }
}

export default CardSimple;