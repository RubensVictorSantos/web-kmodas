import React from 'react';
/** */
import './style.css'
import { DOMAIN_API } from '../../link_config';
import ItemLista from './itemLista';
import { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            limits: props.limits
        };
    }

    componentDidMount() {

        this.carregarItems()

    }

    carregarItems() {

        fetch(`${DOMAIN_API}/prod-LimitedNumber/${this.state.limits}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
        const { error, isLoaded, items } = this.state;

        let i = [];
        i = items[0]

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <div className="spinner"></div>
                    <h1 className="txt-loading">Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="list-tbl">
                    <div className="tbl-header">
                        {
                            Object.keys(i).map(item => (
                                <div>{item}</div>
                            ))
                        }
                    </div>
                    <div className="tbl">
                        {
                            items.map(item => (
                                <ItemLista key={item.cod_prod} produto={item} />
                            ))
                        }

                    </div>
                </div>
            );
        }
    }
}

export default List