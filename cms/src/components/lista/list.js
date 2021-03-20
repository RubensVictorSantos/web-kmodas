import React, { useEffect, useState } from 'react';
/** */
import './style.css'
import { DOMAIN_API } from '../../link_config';
import ItemLista from './itemLista';

const List = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(5);

    useEffect(() => {
        fetch(`${DOMAIN_API}/prod-LimitedNumber/${count}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    },[])

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
            <>
                <div className="tbl">
                    <div className="head-tbl">

                    </div>
                    {
                        items.map(item => (
                            <ItemLista key={item.cod_prod} produto={item} />
                        ))
                    }
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '65%' }}>
                    <input className="btn-carregar-itens" onClick={() => setCount(count + 20)} type='button' value='Carregar +20' />
                    <label style={{ position: 'absolute', right: '0', color: '#aaa', fontSize: '1rem' }}>{count} Itens</label>
                </div>
            </>
        );
    }
}

export default List