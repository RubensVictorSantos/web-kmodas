import React from 'react';
/** */
import './style.css'
import { DOMAIN_IMG } from '../../link_config';
import TableItem from './tableItem';
import Spinner from '../spinner/Spinner'
import { autoKey } from '../modulos';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            url: props.url
        };
    }

    componentDidMount() {
        this.carregarItems()
    }

    carregarItems() {

        let url = this.state.url

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

    filterItems(item) {

        let url = `${DOMAIN_IMG + item.imagem}`

        item.imagem = ''

        item.imagem = url

        if (item.status === 1) {
            item.status = 'Ativado'

        } else if (item.status === 0) {
            item.status = 'Desativado'

        } 

        return item
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;

        } else if (!isLoaded) {
            return <Spinner text={'Loading...'} />
        
        } else {
            let item = []
            item = items.filter(item => { 
                
                return item = this.filterItems(item)
                
                }
            )

            let head = Object.keys(items[0])

            return (

                <div className="tb">

                    {/* TITULO TABELA */}

                    <div className="tb-head">
                        {
                            head.map(title =>
                                <div key={autoKey()}>{title}</div>
                            )
                        }
                    </div>

                    {/* CORPO TABELA */}

                    <div className="tb-body">
                        {
                            item.map(item =>
                                <TableItem key={item.cod_produto} items={item} />
                            )
                        }

                    </div>
                </div>
            );
        }
    }
}

export default Table