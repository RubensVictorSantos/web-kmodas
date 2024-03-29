import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
import CardSimple from "../components/card/cardSimple";
import Spinner from "../components/spinner/Spinner";
import SlideSimple from "../components/slide/slideSimple/slideSimple";
import { DOMAIN_API } from "../link_config";
import './style.css';
import SlideCard from "../components/slide/slideCard/slideCard";

export class HomeCont extends Component {
    state = {
        produtos: [],
        size: 5,
        error: null,
        isLoaded: false
    }

    componentDidMount() {
        const url = `${DOMAIN_API}products/status=1/limit=${10}`;

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

        let { produtos, error, isLoaded } = this.state;
        //let size = 10;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spinner text="Loading..." />;
        } else {
            return (
                <Fragment>

                    <section className="section-slide-home">
                        <SlideSimple imagens={produtos} />
                    </section>

                    {/* <section className="container">
                        <div className="section-title center">
                            <h3>Lançamentos</h3><Link to={'/home'}>Ver todas&#8811;</Link>
                        </div>
                    </section> */}

                    <section className="section-cards-home container">
                        <div className="section-title center">
                            <h3>Camisetas</h3><Link to={'/home'}>Ver todas&#8811;</Link>
                        </div>
                        <SlideCard cards={produtos} />
                        {   
                            produtos.map((produto, index) =>
                                <CardSimple key={index}
                                    title={produto.nome}
                                    image={produto.imagem}
                                    price={produto.preco}
                                    path={`/products/${produto.cod_produto}`}
                                />
                            )
                        }
                    </section>
                </Fragment>
            )
        }
    }
}

export default HomeCont