import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css'
import DOMAIN_IMG from '../../../link_config';

export class Carousel extends Component {
    constructor(props) {
        super()

    }

    state = {
        produto: []
    }

    componentDidMount() {

        this.chargeCarousel(this.props.itensCarousel)

        var carousel = $('#carousel');
        var threshold = 150;
        var slideWidth = 365;
        var dragStart;
        var dragEnd;

        $('#next').on('click', function () { shiftSlide(-1) })
        $('#prev').on('click', function () { shiftSlide(1) })

        carousel.on('mousedown', function (event) {
            if (carousel.hasClass('transition')) return;

            dragStart = event.pageX;

            $(this).on('mousemove', function (event) {
                dragEnd = event.pageX;
                $(this).css('transform', 'translateX(' + dragPos() + 'px)')
            })

            $(document).on('mouseup', function () {
                if (dragPos() > threshold) {
                    return shiftSlide(1)

                }

                if (dragPos() < -threshold) {
                    return shiftSlide(-1)

                }

                shiftSlide(0);
            })
        });

        function dragPos() {
            return dragEnd - dragStart;
        }

        function shiftSlide(direction) {
            if (carousel.hasClass('transition')) return;

            dragEnd = dragStart;

            $(document).off('mouseup')

            carousel.off('mousemove')
                .addClass('transition')
                .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');

            setTimeout(function () {
                if (direction === 1) {
                    $('.slide:first').before($('.slide:last'));

                } else if (direction === -1) {
                    $('.slide:last').after($('.slide:first'));

                }

                carousel.removeClass('transition')
                carousel.css('transform', 'translateX(0px)');

            }, 600)
        }
    }

    chargeCarousel(itensCarousel) {

        this.setState({ produto: [] });

        let url = `http://127.0.0.1:3333/prod-LimitedNumber/` + itensCarousel

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
                            this.state.produto.map( produto =>(
                                <div key={produto.cod_prod} className="slide" id={`b`+ produto.cod_prod}>
                                    <div style={{backgroundColor: 'rgba(255,255,255, 0.9)'}}>
                                        <img src={DOMAIN_IMG + produto.img_prod} width='220px' height='305px' style={{position: 'relative', margin: '0 auto'}} className='img-c'/>
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