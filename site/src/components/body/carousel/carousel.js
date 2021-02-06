import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css'
import DOMAIN_IMG from '../../../link_config';

export class Carousel extends Component {

    state = {
        produto: []
    }

    componentDidMount() {
        this.mountCarousel();

    }

    mountCarousel() {
        var carousel = $('#carousel');

        this.chargeImgCarousel(this.props.itensCarousel);

        $('#next').on('click', () => { shiftSlide(-1) })
        $('#prev').on('click', () => { shiftSlide(1) })

        function shiftSlide(direction) {
            carousel.addClass('transition')
                .css('transform', 'translateX(' + (direction * 360) + 'px)');

            setTimeout(() => {
                if (direction === 1) {
                    $('.slide:first').before($('.slide:last'));

                } else if (direction === -1) {
                    $('.slide:last').after($('.slide:first'));

                }

                carousel.removeClass('transition')
                carousel.css('transform', 'translateX(0px)');

            }, 700);
        }

        setInterval(() => {
            shiftSlide(-1);

        }, 10000);

    }

    chargeImgCarousel(itensCarousel) {

        this.setState({ produto: [] });

        let url = `http://192.168.1.224:3333/prod-LimitedNumber/` + itensCarousel

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
            <div className="wrap">
                <div className="window">
                    <div id="carousel">
                        {
                            this.state.produto.map(produto => (
                                <div key={produto.cod_prod} className="slide" id={`slide-` + produto.cod_prod}>
                                    <div>
                                        <img src={DOMAIN_IMG + produto.img_prod} 
                                        alt={produto.img_prod} className='img-c' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <span id="prev"></span>
                <span id="next"></span>
            </div>
        )
    }
}

export default Carousel