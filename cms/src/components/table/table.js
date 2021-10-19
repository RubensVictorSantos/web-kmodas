import React, { useMemo, useState } from 'react';
/** */
import './style.css'
import TableItem from './tableItem';
import { autoKey } from '../modulos';

export function Table(props) {

    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = useState(config)

        const sortedItems = useMemo(() => {
            let sortableItems = [...items];
            if (sortConfig !== null) {
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return sortableItems;
        }, [items, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { items: sortedItems, requestSort, sortConfig };
    };

    let tbhead = Object.keys(props.items[0])

    const { items, requestSort, sortConfig } = useSortableData(props.items);

    const getDataDirectionFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (

        <table className="tb">

            {/* TITULO TABELA */}

            <thead className="tb-head">
                <tr>
                    <th colSpan="2"></th>
                    {
                        tbhead.map(title =>
                            <th key={autoKey()}>
                                <button
                                    className="btn-tb-head"
                                    type="button"
                                    onClick={() => requestSort(title)}
                                    data-direction={getDataDirectionFor(`${title}`)}
                                >
                                    {title}
                                </button><span />
                            </th>
                        )
                    }
                </tr>
            </thead>

            {/* CORPO TABELA */}

            <tbody className="tb-body">
                {
                    items.map(item => {

                        return (
                            <TableItem key={item.cod_produto} items={item}/>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    );
}

export default Table