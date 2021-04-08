import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css'
import { DOMAIN_IMG, DOMAIN_API } from '../../link_config';

export class Carousel extends Component {

    state = {
        produto: [],
    }

    componentDidMount() {
        this.mountCarousel();
    }

    mountCarousel() {
        var carousel = $('#carousel');

        this.chargeImgCarousel(this.props.itensCarousel);

        $('#next').on('click', () => { shiftSlide(-1) })
        $('#prev').on('click', () => { shiftSlide(1) })

        $(window).on('resize', () => {

            let widWindow = $('.window').width();
            let widCarousel = widWindow * this.props.itensCarousel;

            carousel.css('width', widCarousel + 'px');

        })

        carousel.css('width', ($('.window').width() * this.props.itensCarousel) + 'px');

        function shiftSlide(direction) {
            if (carousel.hasClass('transition')) return;

            if (direction === -1) {
                carousel.addClass('transition')
                    .css('transform', 'translateX(' + (direction * $('.window').width()) + 'px)');

                setTimeout(() => {
                    $('.carousel-slide:last').after($('.carousel-slide:first'));

                    carousel.removeClass('transition')
                    carousel.css('transform', 'translateX(0px)');

                }, 700);

            } else if (direction === 1) {

                setTimeout(() => {
                    $('.carousel-slide:first').before($('.carousel-slide:last'));

                    carousel.removeClass('transition')
                    carousel.css('transform', 'translateX(0px)');
                }, 0.5);

            }
        }

        setInterval(() => {
            shiftSlide(-1);

        }, 10000);


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

            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    render() {

        return (
            <div className="wrap center">
                <div className="window">
                    <div id="carousel">
                        {
                            this.state.produto.map(produto => (
                                <div key={produto.cod_prod} className="carousel-slide" id={`slide-` + produto.cod_prod}>
                                    <img className='carousel-img'
                                        src={DOMAIN_IMG + produto.img_prod}
                                        alt={produto.img_prod} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="center">
                    <span id="prev"></span>
                    <span id="next"></span>
                </div>
            </div>
        )
    }
}

export default Carousel