import React, { useMemo, useState } from 'react';
/** */
import './style.css'
import TableItem from './tableItem';

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
}

const getDataDirectionFor = (name, sortConfig) => {
    if (!sortConfig) {
        return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
};

export const Table = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.items);

    if (!props.items.length) {
        return (<div>Não foi possivel carregar a lista de produtos</div>);
    }

    let tbhead = Object.keys(props.items[0]);

    return (

        <table className="tb">

            {/* TITULO TABELA */}

            <thead className="tb-head">
                <tr>
                    <th colSpan="2"></th>
                    {
                        tbhead.map((title, index) =>
                            <th key={index}>
                                <button
                                    className="btn-tb-head"
                                    type="button"
                                    onClick={() => requestSort(title)}
                                    data-direction={getDataDirectionFor(`${title}`, sortConfig)}
                                >
                                    {title}
                                </button>
                            </th>
                        )
                    }
                </tr>
            </thead>

            {/* CORPO TABELA */}

            <tbody className="tb-body">
                {
                    items.map((item, index) =>
                        <TableItem key={index} item={item} />
                    )
                }
            </tbody>
        </table>
    );
}

export default Table