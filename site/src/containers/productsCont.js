import React, { Component} from "react";
import $ from 'jquery';
/** */
import './style.css';
import Slide from "../components/slide/slide";
import { DOMAIN_API } from "../link_config";

export class ProductsCont extends Component {
    state = {produto: []}

    componentDidMount(){
        this.chargeImgCarousel(5);    
    }

    chargeImgCarousel(itensCarousel) {

        this.setState({ produto: [] });

        let url = `${DOMAIN_API}prod-LimitedNumber/` + itensCarousel

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                this.setState({ produto: [result] });

            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    render() {

        let produto = {...this.state.produto}; 
        return (
            <Slide produto={produto}/>
        )
    }
}

export default ProductsCont