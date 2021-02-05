import React, { Component } from 'react';
import $ from 'jquery';
/** */
import CardProd from '../card-prod/cardProd';
import Carousel from '../carousel/carousel';

export class MainBodyContent extends Component {

    state = { allProd: [] }

    componentDidMount() {

        const url = `http://192.168.1.224:3333/prod-LimitedNumberOn/`+5;

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
            <div className="content-body">
                <div>
                    <Carousel itensCarousel={5}/>
                </div>
                <section className="container-cards">
                    {
                        this.state.allProd.map(produto => (
                            <CardProd key={produto.cod_prod} produto={produto} />
                        ))
                    }
                </section>
            </div>
        )
    }
}

export default MainBodyContent;