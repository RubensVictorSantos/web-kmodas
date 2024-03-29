import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export class Slide extends Component {
    constructor(props){
        super(props)

        this.slideWidth = this.slideWidth.bind(this)

        console.log(props)
        this.state = { produto : this.props.produto }
    }


    componentDidMount() {
        this.slideWidth();

    }

    slideWidth() {

        console.log(this.props.produto);

        var totalWidth = 0;
        var positions = [];
        let wdtScreen = window.screen.width;
        let wdtImg = (wdtScreen / 100) * 95
        let paddingSld = (wdtScreen - wdtImg);

        $('.slide-sprod').css({ 'width': wdtScreen });
        $('.slide-sprod img').css({ "paddingLeft": paddingSld });
        $('.slide-sprod img').css({ 'width': wdtImg });

        $('#slides-sprod .slide-sprod').each(function (i) {

            // Get slider widths
            positions[i] = totalWidth;
            totalWidth += $(this).width();

            // check widths
            if (!$(this).width()) {
                console.log('Please make sure all images have widths!');
                return false;
            }
        });

        // set width
        $('#slides-sprod').width(totalWidth);

        // menu item click handler
        $('#menu-sprod ul li div').on('click', function (e, keepScroll) {

            // remove active calls and add inactive
            $('li.product-sprod').removeClass('active').addClass('inactive');

            // Add active class to the partent
            $(this).parent().addClass('active').removeClass('inactive');

            var pos = $(this).parent().prevAll('.product-sprod').length;

            $('#slides-sprod').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450);

            // Prevent default
            e.preventDefault();
        });

        // Make first image active.
        $('.product-sprod')
            .first()
            .addClass('active')
            .siblings()
            .addClass('inactive');
    }

    render() {

        // let prod = this.props.produto
        return (
            <div id="slider-sprod">
                <div id="slides-sprod">
                    
                    {/* {
                        prod.map(produto => (
                            <div className="slide-sprod" key={produto.cod_prod}>
                                <img src={DOMAIN_IMG + produto.img_prod}
                                    alt={produto.img_prod} />
                            </div>
                        ))
                    } */}

                </div>

                <nav id="menu-sprod">
                    <ul>
                        <li className="sep"></li>
                        {/* {
                            prod.map(produto => (
                                <li key={produto.cod_prod} className="product-sprod">
                                    <div key={produto.cod_prod}>
                                        <img src={DOMAIN_IMG + produto.img_prod}
                                            alt={produto.img_prod}
                                            width="100%" height="100%" />

                                    </div>
                                </li>
                            ))
                        } */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Slide;