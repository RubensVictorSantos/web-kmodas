import React, { Component } from 'react';
import $ from 'jquery'; 
/** */
import { CardProd } from '../card-prod/cardProd';

export class ContentBody extends Component {
    constructor() {
        super()
        this.state = { allProd: [] }
    }

    componentDidMount(){
        
        const url = 'http://127.1.1.0:3333/AllProd';

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                this.setState({ allProd: result })
            },
            error: (status) => {

                alert(status)

            }
        })
    }

    render() {

        return (
            <div className="content-body">
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

export default ContentBody;