import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';
import { DOMAIN_IMG, DOMAIN_API } from '../../link_config';

export class Slide extends Component {

    state = { produto: [] }

    componentDidMount() {
        this.chargeImgCarousel(5);

    }

    slideWidth() {

        let wdtScreen = window.screen.width;
        let wdtImg = (wdtScreen / 100) * 95;
        let paddingSld = (wdtScreen - wdtImg);
        let totalWidth = 0;
        let positions = [];
        let items = this.props.produto

        for(let i in items){

            positions[i] = totalWidth

            totalWidth = totalWidth + window.screen.width;

        }

        $('.slide').css({ 'width': wdtScreen });

        // $('#slides .slide').each(function (i) {

        //     // Get slider widths
        //     // positions[i] = totalWidth;
        //     totalWidth += $(this).width();
        //     // check widths
        //     if (!$(this).width()) {
        //         console.log('Please make sure all images have widths!');
        //         return false;
        //     }
        // });

        // set width
        $('#slides').width(totalWidth);
        // menu item click handler
        $('#menu-slide ul li div').on('click', function (e, keepScroll) {
            // remove active calls and add inactive
            $('li.product-slide').removeClass('active').addClass('inactive');
            // Add active class to the partent
            $(this).parent().addClass('active').removeClass('inactive');
            var pos = $(this).parent().prevAll('.product-slide').length;
            $('#slides').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450);
            // Prevent default
            e.preventDefault();
        });
        // Make first image active.
        $('.product-slide')
            .first()
            .addClass('active')
            .siblings()
            .addClass('inactive');
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
                this.setState({ produto: result });
                // this.slideWidth();
            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    render() {
        let prod = this.state.produto;
        this.slideWidth();

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

                <nav id="menu-slide">
                    <ul>
                        <li className="sep"></li>
                        {
                            prod.map(produto => (
                                <li key={produto.cod_prod} className="product-slide">
                                    <div key={produto.cod_prod}>
                                        <img src={DOMAIN_IMG + produto.img_prod}
                                            alt={produto.img_prod}
                                            width="100%" height="100%" />

                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Slide;