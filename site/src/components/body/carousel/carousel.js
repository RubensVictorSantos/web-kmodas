import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './../../../css/style.css'

export class Carousel extends Component {

    componentDidMount() {

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

    render() {
        return (
            <div className="wrap">
                <div className="window">
                    <div id="carousel">
                        <span className="slide" id="b1">SLIDE-1</span>
                        <span className="slide" id="b2">SLIDE-2</span>
                        <span className="slide" id="b3">SLIDE-3</span>
                        <span className="slide" id="b4">SLIDE-4</span>
                        <span className="slide" id="b5">SLIDE-5</span>
                    </div>
                </div>
                <span id="prev"></span>
                <span id="next"></span>
            </div>
        )
    }
}

export default Carousel