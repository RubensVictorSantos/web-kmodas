import React, { useEffect, useState } from 'react';
/** */
import ImgNotFound from '../../resources/ico/image-not-found.png'
import './style.css'
import { DOMAIN_IMG } from '../../link_config';
import TableItem from './tableItem';
import Spinner from '../spinner/Spinner'
import { autoKey } from '../modulos';

function Table(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = props.url

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    result.length ? setItems(result) : setItems([result])
                    setIsLoaded(true);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [props])

    const filterItems = (item) => {

        console.log(item.imagem);

        if (item.status === 1) {
            item.status = 'Ativado'

        } else if (item.status === 0) {
            item.status = 'Desativado'

        } else if (item.imagem === []) {
            item.imagem = ImgNotFound

        } else {
            item.imagem = `${DOMAIN_IMG + item.imagem}`

        }

        return item
    }

    if (error) {
        return <div>Error: {error.message}</div>

    } else if (!isLoaded) {
        return (
            <Spinner text={'Loading...'} />
        )
    } else {

        let item = items.map(item => item).filter(item => item = filterItems(item))
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

export default Table