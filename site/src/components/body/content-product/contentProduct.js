import React, { Component } from 'react';
import $ from 'jquery';
/** */
import './style.css';
import DOMAIN_IMG from '../../../link_config';

export class ContentProduct extends Component {

    state = { produto:[] }

    componentDidMount() {

        this.chargeImgCarousel(5);

        var totalWidth = 0;
        var positions = [];

        $('#slides .slide-prod').each(function (i) {

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
        $('#menu ul li div').on('click', function (e) {

            // remove active calls and add inactive
            $('li.product').removeClass('active').addClass('inactive');

            // Add active class to the partent
            $(this).parent().addClass('active');

            var pos = $(this).parent().prevAll('.product').length;

            $('#slides').stop().animate({ marginLeft: -positions[pos] + 'px' }, 450);

            // Prevent default
            e.preventDefault();

        });

        // Make first image active.
        $('.product').first().addClass('active').siblings().addClass('inactive');


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

            },
            error: (status, error) => {

                console.log(status, error);

            }
        });
    }

    render() {
        return (
            <div id="container">
                <div id="slider">
                    <div id="slides">
                        rubens victor
                        {
                            // console.log(this.state.produto)
                            this.state.produto.map(produto => (
                                <div key={produto.cod_prod} className="slide-prod" style={{backgroundColor: ` rgb(20${produto.cod_prod},2${produto.cod_prod}0,${produto.cod_prod})`}}
                                    >
                                    <img src={DOMAIN_IMG + produto.img_prod} alt={produto.img_prod} width="300px" height="200px" 
                                    />
    
                                </div>
                            ))
                        }

                        {/* <div className="slide-prod">
                            <img src="./bgcolorido/bg_03.png" width="300" height="200" />

                        </div>

                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_04.png" width="300" height="200" />

                        </div>

                        <div className="slide-prod">
                            <img src="./bgcolorido/bg_05.png" width="300" height="200" />

                        </div> */}

                    </div>

                    <nav id="menu">
                        <ul>
                            <li className="sep"></li>

                            {
                            // console.log(this.state.produto)
                            this.state.produto.map(produto => (
                                <li className="product">
                                    <div key={produto.cod_prod}>
                                        <img src={DOMAIN_IMG + produto.img_prod} 
                                            alt={produto.img_prod}
                                            width="100%" height="100%" />
        
                                    </div>
                                </li>
                            ))
                        }


                            {/* <li className="product">
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
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ContentProduct;