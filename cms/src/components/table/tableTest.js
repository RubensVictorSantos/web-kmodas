import React, { useMemo, useState } from 'react';
import './style.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

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

const TableTest = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);

    const getDataDirectionFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table className="tb">
            <thead className="tb-head">
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('nome')}
                            data-direction={getDataDirectionFor('nome')}
                        >
                            Name
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('preco')}
                            data-direction={getDataDirectionFor('preco')}

                        >
                            Price
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('status')}
                            data-direction={getDataDirectionFor('status')}

                        >
                            In Stock
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody className="tb-body">
                {items.map((item) => (
                    <tr className="tb-row" key={item.cod_produto}>
                        <td className='tb-col'>{item.nome}</td>
                        <td>R${item.preco}</td>
                        <td>{item.status}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableTest
