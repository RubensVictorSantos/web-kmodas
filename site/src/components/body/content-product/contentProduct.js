import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';

export class ContentProduct extends Component {

    componentDidMount() {

            var totalWidth = 0;
            var positions = [];
        
            $('#slides .slide').each( function(i) {
        
                // Get slider widths
                positions[i] = totalWidth;
                console.log(positions[i]);
        
                totalWidth += $(this).width();
                
                // check widths
                // if( !$(this).width() ) {
                //     alert('Please make sure all images have widths!');
                //     return false;
                // }
            });
            
            // set width
            $('#slides').width(totalWidth);
            
            // menu item click handler
            $('#menu ul li').click( function(e, keepScroll) {
                
                // remove active calls and add inactive
                $('li.product').removeClass('active').addClass('inactive');
                
                // Add active class to the partent
                $(this).parent().addClass('active');
                
                var pos = $(this).parent().prevAll('.product').length;
                
                $('#slides').stop().animate({marginLeft:-positions[pos] + 'px'}, 450);
                
                // Prevent default
                e.preventDefault();
                
                // Stopping the autoscroll
                // if(!autoScroll) {
                //     clearInterval(itvl);
                // }   
            });
            
            // Make first image active.
            $('.product').first().addClass('active').siblings().addClass('inactive');
            
            // Auto scroll
            // var current = 1;
            
            // function autoScroll() {
            //     if (current == -1) {
            //         return false;
            //     }
                
            //     $( '#menu ul li a' ).eq( current % $('#menu ul li a').length ).trigger('click', true);
            //     current++;
            // }
            
            // Durration for auto scroll
            // var duration = 5;
            // var itvl = setInterval( function() {
            //     autoScroll();
            // }, duration * 1000);

    }

    render() {
        return (
            <div id="container">
                <div id="slider">
                    <div id="slides">
                        <div className="slide">
                            <img src="./bgcolorido/bg_02.png" width="300" height="200" />

                        </div>

                        <div className="slide">
                            <img src="./bgcolorido/bg_03.png" width="300" height="200" />

                        </div>

                        <div className="slide">
                            <img src="./bgcolorido/bg_04.png" width="300" height="200" />

                        </div>

                        <div className="slide">
                            <img src="./bgcolorido/bg_05.png" width="300" height="200" />

                        </div>

                    </div>

                    <nav id="menu">
                        <ul>
                            <li className="sep">teste</li>

                            <li className="product">
                                <a href="">
                                    <img src="./bgcolorido/bg_02.png" alt="thumbnail" width="100%" height="100%" />
                                </a>
                            </li>

                            <li className="product">
                                <a href="">
                                    <img src="./bgcolorido/bg_03.png" alt="thumbnail" width="100%" height="100%" />
                                </a>
                            </li>

                            <li className="product">
                                <a href="">
                                    <img src="./bgcolorido/bg_04.png" alt="thumbnail" width="100%" height="100%" />
                                </a>
                            </li>

                            <li className="product">
                                <a href="">
                                    <img src="./bgcolorido/bg_05.png" alt="thumbnail" width="100%" height="100%" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ContentProduct;