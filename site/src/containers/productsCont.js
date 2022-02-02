import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
import './style.css';
import SlideSideBar from "../components/slide/slideSideBar/slideSideBar";
import Spinner from "../components/spinner/Spinner";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    state = {
        produto: [],
        error: null,
        isLoaded: false,
    }

    componentDidMount() {
        let id = this.props.match.params.id
        let url = `${DOMAIN_API}products/id=${id}`
        // let url = `${DOMAIN_API}products/status=1/limit=5`

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        produto: result
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
        const { error, isLoaded, produto } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>
                <Spinner text="Loading..." />
            </div>;
        } else {
            return (
                <Fragment>
                    <div className='container-produto center'>
                        <div className='container-slide-product'>
                            <SlideSideBar imagens={produto} />
                        </div>
                        <div className='container-info-produto'>
                            <h1>{produto.nome}</h1>
                            <div>
                                <h3>
                                    <i>R$ {produto.preco}</i>
                                </h3>
                            </div>
                            <div>

                                <h5> Modelos </h5>


                                <div className="chk-sexo-produto">
                                    <input type="radio" name="chk-sexo" value="popularity" id="sort1" />
                                    <label htmlFor="sort1">
                                        <span>Masculino</span>
                                    </label>

                                    <input type="radio" name="chk-sexo" value="price" id="sort2" />
                                    <label htmlFor="sort2">
                                        <span>Feminino</span>
                                    </label>
                                </div>

                            </div>
                            <div>
                                <h5> Cor </h5> {produto.cor}
                            </div>
                            <div>
                                <h5>Tamanho</h5>

                                <div className="rdo-product-size center">
                                    <input type="radio" name="sort" value="popularity" id="p" />
                                    <label htmlFor="p">
                                        <span>P</span>
                                    </label>
                                    <input type="radio" name="sort" value="price" id="M" />
                                    <label htmlFor="M">
                                        <span>M</span>
                                    </label>

                                    <input type="radio" name="sort" value="price" id="G" />
                                    <label htmlFor="G">
                                        <span>G</span>
                                    </label>
                                    <input type="radio" name="sort" value="price" id="GG" />
                                    <label htmlFor="GG">
                                        <span>GG</span>
                                    </label>
                                    <input type="radio" name="sort" value="price" id="XG" />
                                    <label htmlFor="XG">
                                        <span>XG</span>
                                    </label>
                                    <input type="radio" name="sort" value="price" id="G2" />
                                    <label htmlFor="G2">
                                        <span>G2</span>
                                    </label>
                                    <input type="radio" name="sort" value="price" id="G3" />
                                    <label htmlFor="G3">
                                        <span>G3</span>
                                    </label>

                                </div>
                            </div>
                            <div>
                                <button> COMPRAR </button>
                            </div>
                            {
                                // Informações sobre pagamento com boleto
                            }
                            <hr />
                            <div>
                                <p> 3% off no boleto ou 2x sem juros no cartão<br />
                                    Frete grátis nas compras acima de R$250,00.
                                    Norte e Nordeste R$ 480,00.
                                </p>
                            </div>
                            <hr />

                            {
                                // Informações sobre o produto
                            }
                            <div>{produto.descricao}<br />
                                Composição....<br />
                                Sobre a estampa....
                            </div>
                            <Link to='/video'>Assista a um vídeo sobre o produto&#8811;</Link>
                        </div>
                    </div>
                    <div>
                        Tags
                    </div>
                    <div>
                        Slide Com outros produtos
                    </div>
                </Fragment>
            );
        }
    }
}

export default ProductsCont