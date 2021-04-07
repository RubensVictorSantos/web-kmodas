import React, { Component } from "react";
import $ from 'jquery'
/** */
import Carousel from "../components/carousel/carousel";
import CardProd from "../components/card-prod/cardProd";
import { DOMAIN_API } from "../link_config";
import './style.css';
import { Fragment } from "react";

export class HomeCont extends Component {
    state = { allProd: [] }

    componentDidMount() {

        const url = `${DOMAIN_API}prod-LimitedNumberOn/${5}`;

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                this.setState({ allProd: result });

            },
            error: (status, error) => {

                console.log(status, error);

            }
        })
    }

    render() {
        return (
            <Fragment>
                <Carousel itensCarousel={5} />
                {/* <section className="container-cards">
                    {
                        this.state.allProd.map(produto => (
                            <CardProd key={produto.cod_prod} produto={produto} />
                        ))
                    }
                </section> */}
            </Fragment>
        )
    }
}

export default HomeCont