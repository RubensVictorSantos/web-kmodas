import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';
import { DOMAIN_IMG, DOMAIN_IMG_DEFAULT } from '../../../link_config';

export class ContentProduct extends Component {

    state = { produto: []}

    componentDidMount() {
        this.chargeImgCarousel(5);

    }

    slideWidth() {
        var totalWidth = 0;
        var positions = [];
        let wdtScreen = '';
        // let wdtImg = (wdtScreen/100)* 95;
        // let paddingSld = (wdtScreen - wdtImg);

        $('.slide-sprod')    .css({'width': wdtScreen});
        // $('.slide-sprod img').css({"paddingLeft": paddingSld});
        // $('.slide-sprod img').css({'width': wdtImg});

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
        $('#menu-sprod ul li div').on('click', function(e, keepScroll) {
            
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

    chargeImgCarousel(itensCarousel) {

        this.setState({ produto: [] });

        let url = `http://127.0.0.1:3333/prod-LimitedNumber/` + itensCarousel

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {
                this.setState({ produto: result });
                this.slideWidth()
            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    render() {
        let prod = this.state.produto
        return (
            <div id="container-sprod">
                <div id="slider-sprod">
                    <div id="slides-sprod">
                        {
                            prod.map(produto => (
                                <div className="slide-sprod" key={produto.cod_prod}>
                                    <img src={DOMAIN_IMG + produto.img_prod}
                                        alt={produto.img_prod} />
                                    
                                    {/* <div>
                                        <h1>Slide - { produto.cod_prod }</h1>
                                    </div> */}
                                </div>
                            ))
                        }

                    </div>

                    {/* <nav id="menu-sprod">
                        <ul>
                            <li className="sep"></li>
                            {
                            prod.map(produto => (
                                <li key={produto.cod_prod} className="product-sprod">
                                    <div key={produto.cod_prod}>
                                        <img src={DOMAIN_IMG + produto.img_prod}
                                            alt={produto.img_prod}
                                            width="100%" height="100%" />

                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    </nav> */}
                </div>
            </div>
        )
    }
}

export default ContentProduct;