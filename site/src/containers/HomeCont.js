import React, { Component, Fragment} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
/** */
import Carousel from "../components/carousel/carousel";
import CardSimple from "../components/card/cardSimple";
import { DOMAIN_API } from "../link_config";
import './style.css';

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
                <Carousel itensCarousel={5} auto={true} />
                <section className="container-cards content">
                    {
                        this.state.allProd.map(produto => (
                            <Link to='/products' key={produto.cod_prod} className="card-closed" id="card-prod">
                                <CardSimple key={produto.cod_prod}
                                    title={produto.nome_prod}
                                    image={produto.img_prod}
                                    price={produto.preco_prod}
                                />
                                
                            </Link>
                        ))
                    }
                </section>
            </Fragment>
        )
    }
}

export default HomeCont