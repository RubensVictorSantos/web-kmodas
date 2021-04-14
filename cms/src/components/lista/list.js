import React, { useEffect, useState } from 'react';
/** */
import './style.css'
import { DOMAIN_API } from '../../link_config';
import ItemLista from './itemLista';

function List(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = props.limits.search ? `${DOMAIN_API}/prod-id/${Object.values(props.limits.texto)}`: 
        `${DOMAIN_API}/prod-LimitedNumber/${props.limits.limit}`
        
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

    }, [props.limits])

    if (error) {
        return <div>Error: {error.message}</div>;
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
                <div className="tbl-header">
                    {/* {
                        items.map(item => (
                            <div key={Math.floor((Math.random() * 100) + 1)}>{Object.keys(item)}</div>
                        ))
                    } */}
                </div>
                <div className="tbl">
                    {
                        items.map(item => (
                            <ItemLista key={item.cod_produto} produto={item} />
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default List