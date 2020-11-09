import React, { Component } from 'react';
import './../../../recursos/css/App.css'
// import { buscarProdId } from '../modulos';
/** */

export class ContainerBuscar extends Component {
    constructor(props) {
        super()

        this.formProd = this.formProd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        input: []
    }

    componentDidMount() {
        console.log(this.props.visualizarProd)
    }

    handleChange(e) {

        const input = { ...this.state.input }
        let value = '';

        value = e.target.value;

        console.log(value);

        input[e.target.name] = value;

        this.setState({ input });
    }

    formProd(e) {
        e.preventDefault();

        let input = { ...this.state.input }

        this.setState({ input })

        console.log(input.txtId);


        // export const buscarProdId = (id) => {

        //     const url = `http://127.1.1.0:3333/prodId/${id}`;

        //     $.ajax({
        //         url: url,
        //         type: 'GET',
        //         dataType: 'json',
        //         contentType: 'application/json',
        //         success: (result) => {

        //             console.log(result);

        //             return result

        //         }
        //     })
        // }
    }

    render() {
        return (
            // <div className="">
                <form className="formBuscar" onSubmit={this.formProd}>
                    <div>
                        <label>ID: </label>
                        <input className="numBuscar"
                            type="number"
                            name="txtId"
                            onChange={this.handleChange}
                        />
                    </div>

                    <input className=""
                        type="text"
                        name="txtNome"
                        onChange={this.handleChange}
                    />

                    {/* <button type='submit' className="" id="">Buscar</button> */}
                    <button type='submit' className="" id="">Buscar</button>
                    <button className="" onClick={this.props.onClose} type="" id="btnnew">Novo</button>
                </form>
            /* </div> */

        )
    }
}

export default ContainerBuscar