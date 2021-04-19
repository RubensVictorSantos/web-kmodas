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
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [props])

    if (error) {
        return <div>Error: {error.message}</div>
        
    } else if (!isLoaded) {
        return (
            <Spinner text={'Loading...'}/>
        )
    } else {

        return (
            <div className="tb">

                {/* TITULO TABELA */}

                <div className="tb-head">
                        {
                            items.length >= 1 ? Object.keys(items[0]).map(title =>
                                <div key={autoKey()}>
                                    {title}
                                </div>

                            ) : Object.keys(items).map(title =>
                                <div key={autoKey()}>
                                    {title}
                                </div>
                            )
                        }
                </div>

                {/* CORPO TABELA */}

                <div className="tb-body">
                    {
                        
                        items.length >= 1 ? items.map(item => {

                            let cod = item.cod_produto

                            if (item.status === 1) {
                                item.status = 'Ativado'

                            } else if (item.status === 0) {
                                item.status = 'Desativado'

                            } else if (item.imagem) {

                                if (item.imagem === []) {
                                    item.imagem = ImgNotFound

                                } else {
                                    item.imagem = DOMAIN_IMG + item.imagem

                                }
                            }

                            return (<TableItem key={cod} items={item}/>)

                        }) : <TableItem key={items.cod_produto} items={items} />
                    }

                </div>
            </div>
        );
    }
}

export default Table