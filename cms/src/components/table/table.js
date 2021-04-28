import React, { Component } from 'react';
/** */
import './style.css'
import TableItem from './tableItem';
import Spinner from '../spinner/Spinner'
import { autoKey } from '../modulos';

export class Table extends Component {
    constructor(props) {
        super(props);

        let url = this.props.url

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            url: url
        };
    }

    componentDidMount() {
        this.carregarItems()
    }

    carregarItems() {

        let url = this.props.url

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {

                    let items

                    result.length ? items = result : items = [result]

                    this.setState({
                        isLoaded: true,
                        items: items
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

        if (error) {
            return <div>Error: {error.message}</div>;

        } else if (!isLoaded) {
            return <Spinner text={'Loading...'} />

        } else {

            let item = items

            let head = Object.keys(items[0])

            return (

                <table className="tb">

                    {/* TITULO TABELA */}

                    <thead className="tb-head">
                        <tr>
                            <th colSpan="2"></th>
                            {
                                head.map(title =>
                                    <th key={autoKey()}>{title}</th>
                                )
                            }
                        </tr>
                    </thead>

                    {/* CORPO TABELA */}

                    <tbody className="tb-body">
                        {
                            item.map(item =>
                                <TableItem key={item.cod_produto} items={item} />
                            )
                        }
                    </tbody>
                </table>
            );

        }
    }
}

export default Table