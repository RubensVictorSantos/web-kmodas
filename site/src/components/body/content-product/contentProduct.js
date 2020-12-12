import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';

export class ContentProduct extends Component {

    componentDidMount() {

            var totalWidth = 0;
            var positions = [];
        
            $('#slides .slide-prod').each( function(i) {
        
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
            $('#menu ul li div').on('click', function(e) {
                
                // remove active calls and add inactive
                $('li.product').removeClass('active').addClass('inactive');
                
                // Add active class to the partent
                $(this).parent().addClass('active');
                
                var pos = $(this).parent().prevAll('.product').length;
                
                $('#slides').stop().animate({marginLeft:-positions[pos] + 'px'}, 450);
                
                // Prevent default
                e.preventDefault();

            });
            
            // Make first image active.
            $('.product').first().addClass('active').siblings().addClass('inactive');
            

    }

    render() {
        return (
            <div id="container">
                <div id="slider">
                    <div id="slides">
                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_02.png" width="300" height="200" />

                        </div>

                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_03.png" width="300" height="200" />

                        </div>

                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_04.png" width="300" height="200" />

                        </div>

                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_05.png" width="300" height="200" />

                        </div>

                    </div>

                    <nav id="menu">
                        <ul>
                            <li className="sep"></li>

                            <li className="product">
                                <div>
                                    <img src="./bgcolorido/bg_02.png" alt="thumbnail" width="100%" height="100%" />
                                </div>
                            </li>

                            <li className="product">
                                <div>
                                    <img src="./bgcolorido/bg_03.png" alt="thumbnail" width="100%" height="100%" />
                                </div>
                            </li>

                            <li className="product">
                                <div>
                                    <img src="./bgcolorido/bg_04.png" alt="thumbnail" width="100%" height="100%" />
                                </div>
                            </li>

                            <li className="product">
                                <div>
                                    <img src="./bgcolorido/bg_05.png" alt="thumbnail" width="100%" height="100%" />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ContentProduct;