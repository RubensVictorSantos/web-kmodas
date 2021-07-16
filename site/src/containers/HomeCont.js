import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
// import Carousel from "../components/carousel/carousel";
import Carousel from "../components/carousel/carousel";
import CardSimple from "../components/card/cardSimple";
import { DOMAIN_API } from "../link_config";
import './style.css';

export class HomeCont extends Component {
    state = {
        produtos: [],
        size: 5,
        error: null,
        isLoaded: false
    }

    componentDidMount() {

        const url = `${DOMAIN_API}products/status=1/limit=${5}`;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        produtos: result,
                        size: result.length
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        let { produtos, size, error, isLoaded } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Fragment>
                    <Carousel size={size} scroll={true} />

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
}

export default HomeCont