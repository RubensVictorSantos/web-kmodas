import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
/** */
import { DOMAIN_API } from '../../link_config';
import Search from '../../components/forms/search/formSearch';
import Table from '../../components/table/table';
import Spinner from '../../components/spinner/Spinner';
import './style.css';
import BackButton from '../../components/buttons/btnPrevPage';

const PaginationLink = (props) => {
    let offset = props.params.offset;
    let limit = props.params.limit;

    const pagination = (direction) => {

        if (direction === 1) {
            offset += limit

        }
        else if (direction === -1) {
            offset = offset - limit

        }

        props.params.changeState(offset);
        props.params.loadList(offset);
    }

    return (
        <div className="center">
            <ul className="pagination">
                <li><Link to="#" onClick={() => pagination(-1)}>&#10094;</Link></li>
                <li><Link to="#" >1</Link></li>
                <li><Link to="#" className="active">2</Link></li>
                <li><Link to="#" >3</Link></li>
                <li><Link to="#" >4</Link></li>
                <li><Link to="#" >5</Link></li>
                <li><Link to="#" >6</Link></li>
                <li><Link to="#" >7</Link></li>
                <li><Link to="#" onClick={() => pagination(1)}>&#10095;</Link></li>
            </ul>
        </div>
    )
}

export class ListUserCont extends Component {
    constructor(props) {
        super(props)

        this.state = {
            limit: 10,
            offset: 0,
            search: false,
            texto: [],
            url: '',
            items: [],
            count: [],
            message: [],
            error: null,
            isLoaded: false,
        }

        this.changeState = this.changeState.bind(this);
        this.loadList = this.loadList.bind(this);
    }

    componentDidMount() {
        this.loadList();
    }

    errorHandler(res) {
        if (res.ok) return res.json();

        console.log(res);

        throw new Error('Something went wrong.');

    }

    changeState(offset, textSearch) {
        if (offset > 0)
            this.setState({ offset: offset });
    }

    loadList(offset = this.state.offset) {

        let url = `${DOMAIN_API}/users/limit=${this.state.limit}/offset=${offset}`;

        this.setState({ url: url });

        fetch(url)
            .then((res) => this.errorHandler(res))
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.rows,
                        count: result.count
                    })
                })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            })
    }

    render() {

        let { count, limit, items, offset, error, isLoaded } = this.state

        if (error) {
            return (
                <>
                    <div>Error: {error.message}</div>
                    <div className="list-footer container">
                        <div></div>
                        <PaginationLink params={{
                            count: count,
                            limit: limit,
                            offset: offset,
                            loadList: this.loadList,
                            changeState: this.changeState
                        }} />
                        <label>Total {count}</label>
                    </div>
                </>
            );

        } else if (!isLoaded) {
            return <Spinner text={'Loading...'} />

        } else {
            return (

                <Fragment>
                    {/** FORMULÁRIO BUSCAR */}

                    <BackButton {...this.props}/>

                    <Search changeState={this.changeState} />

                    {/** TABELA */}
                    <div className="tb-produto">
                        <Table items={items} />

                    </div>

                    {/** RODAPÉ */}
                    <div className="list-footer container">
                        <div></div>
                        <PaginationLink params={{
                            count: count,
                            limit: limit,
                            offset: offset,
                            loadList: this.loadList,
                            changeState: this.changeState
                        }} />
                        <label>Total {count}</label>
                    </div>
                </Fragment>
            )
        }
    }
}

export default ListUserCont;