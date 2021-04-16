import React, { useEffect, useState } from 'react';
/** */
import ImgNotFound from '../../resources/ico/image-not-found.png'
import './style.css'
import { DOMAIN_IMG } from '../../link_config';
import ItemLista from './itemLista';

function List(props) {
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
            <div>
                <div className="spinner"></div>
                <h2 className="txt-loading">LOADING...</h2>
            </div>
        )
    } else {

        return (
            <div className="list-tbl">

                {/* TITULO TABELA */}

                <div className="tbl-header">
                    {
                        items.length >= 1 ? Object.keys(items[0]).map(title =>
                            
                            <div key={Math.floor((Math.random() * 100) + 1)}>
                                {title}
                            </div>

                        ) : Object.keys(items).map(i =>
                            <div key={Math.floor((Math.random() * 100) + 1)}>{i}</div>
                        )
                    }
                </div>

                <div className="tbl">
                    {
                        items.length >= 1 ? items.map(item => {

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

                            return (<ItemLista key={item.cod_produto} items={item} />)

                        }) : <ItemLista key={items.cod_produto} items={items} />
                    }

                </div>
            </div>
        );

    }
}

export default List