import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
// import Carousel from "../components/carousel/carousel";
import CarouselTeste from "../components/carousel/carousel";
import CardSimple from "../components/card/cardSimple";
import { DOMAIN_API } from "../link_config";
import './style.css';

export class HomeCont extends Component {
    state = { produtos: [], size: 5 }

    componentDidMount() {

        const url = `${DOMAIN_API}products/status=1/limit=${5}`;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        produtos: result,
                        size: result.length
                    }); 
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {

        let { produtos, size } = this.state;

        return (
            <Fragment>
                {/* <Carousel size={size} scroll={true} /> */}
                <CarouselTeste size={size} scroll={true} />

                <section className="container-cards container">
                    {
                        produtos.map(produto => {

                            return (

                                <Link to={`/products/${produto.cod_produto}`} key={produto.cod_produto} className="card-closed" id="card-prod">
                                    <CardSimple key={produto.cod_produto}
                                        title={produto.nome}
                                        image={produto.imagem}
                                        price={produto.preco}
                                    />

                                </Link>
                            )
                        })
                    }
                </section>
            </Fragment>
        )
    }
}

export default HomeCont