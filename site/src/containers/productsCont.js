import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
/** */
import './style.css';
import Slide from "../components/slide/slide";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    // this.handleChange = this.handleChange.bind(this);
    state = {
        produto: [],
        error: null,
        isLoaded: false,
    }

    componentDidMount() {

        let id = this.getURLParameters('products', window.location.href);

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

    getURLParameters(param, url) {
        // eslint-disable-next-line
        param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\/]" + param + "/([^&#]*)";
        var regex = new RegExp(regexS);
        var results;

        //se url não for informada, assume a url corrente da página
        if (typeof url == "undefined") {
            results = regex.exec(window.location.href);

        }
        else {
            results = regex.exec(url);
        }

        if (results == null) {
            return console.log('Results: null');;
        }
        else {

            let id = decodeURI(results[1])

            //Tratar dos caracteres e espaço.
            return id;
        }
    }

    handleChange(e) {

        console.log(e)

        // const produto = { ...this.state.produto }
        // const input = e.target

        // let value = '';

        // if (input.type === 'file') {
        //     value = urlImg(input, 'imgprod');

        // } else if (input.type === 'checkbox') {
        //     value = input.checked;

        // } else if (input.name === 'preco') {
        //     value = input.value.replace(/[A-z]/, '');

        // } else {
        //     value = input.value;

        // }

        // produto[input.name] = value;

        // this.setState({ produto });
    }

    render() {
        const { error, isLoaded, produto } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {


            let modelos = []

            return (
                <Fragment>
                    <div className='container-produto center'>
                        <div className='container-slide-prod'>
                            <Slide imagens={produto} />

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

                                <div className="chk-tamanho-produto">
                                    <input type="radio" name="sort" value="popularity" id="p" />
                                    <label htmlFor="p">
                                        {/* <span>{produto.tamanho}</span> */}
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

                                {/* Tamanho: P M G GG XG G2 G3 */}
                            </div>
                            <div>
                                <button> COMPRAR </button>
                            </div>
                            <div>Informações sobre pagamento com boleto</div>
                            <div>Informações sobre o produto<br />
                                Composição....<br />
                                Sobre a estampa....
                            </div>
                            <Link to='/video'>Assista a um vídeo sobre o produto</Link>
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