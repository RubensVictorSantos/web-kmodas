import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export class Slide extends Component {

    state = { 
        produto: [], 
        positions: []
    }

    componentDidUpdate(){
        this.slideWidth();

    }

    slideWidth() {

        let totalWidth = 0;
        let positions = [];
        let items = this.props.produto

        for(let i in items){

            positions[i] = totalWidth

            totalWidth = totalWidth + window.screen.width;

        }

        // set width
        $('#slides').width(totalWidth);

        // menu item click handler
        $('#slide-menu li img').on('click', function (e) {

            // remove active calls and add inactive
            $('li.slide-menu-item').removeClass('active').addClass('inactive');
            // Add active class to the partent
            $(this).parent().addClass('active').removeClass('inactive');
            var pos = $(this).parent().prevAll('.slide-menu-item').length;
            $('#slides').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450);
            // Prevent default
            e.preventDefault();
        });

        // Make first image active.
        $('.slide-menu-item')
            .first()
            .addClass('active')
            .siblings()
            .addClass('inactive');
    }

    render() {
        let prod = this.props.produto;

        return (
            <div id="slider">
                <div id="slides">
                    {
                        prod.map(produto => (
                            <div className="slide center" key={produto.cod_prod}>
                                <img src={DOMAIN_IMG + produto.img_prod}
                                    alt={produto.img_prod} />
                            </div>
                        ))
                    }

                </div>

                {/* 
                Slide menu ----------------------------------->*/}

                <ul id="slide-menu">
                    <li className="sep"></li>
                    {
                        prod.map(produto => (
                            <li key={produto.cod_prod} className="slide-menu-item center">
                                    <img src={DOMAIN_IMG + produto.img_prod}
                                        alt={produto.img_prod}/>

                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default Slide;