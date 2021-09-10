import React, { useEffect, useLayoutEffect, useState } from 'react';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';
import { Fragment } from 'react';

export default function Slide(props) {

    const [widSlides, setWidSlides] = useState(0);
    const [widSlider, setWidSlider] = useState(0);
    const [styleSlides, setStyleSlides] = useState([]);
    const imagens = props.imagens.length ? props.imagens : [props.imagens];
    
    let positions = [];

    useEffect(() => {

        let widSlider = document.getElementById("slider").clientWidth;

        setWidSlider(widSlider);

        setWidSlides(widSlider * imagens.length);

    }, [imagens])

    useLayoutEffect(() => {

        let widSlider = document.getElementById("slider").clientWidth;

        setWidSlider(widSlider)

        setWidSlides(widSlider * imagens.length);
    }, [imagens])

    // Menu item click handler
    function menuHandler(e) {

        let li = e.target.parentElement,
            list = document.querySelectorAll('.slide-menu-item'),
            position = 0,
            index = 0;

        for (let i = 0; i < list.length; i++) {

            list[i].classList.remove('active');
            list[i].classList.add('inactive');

            positions[i] = position
            position = position + widSlider;
        }

        li.classList.add('active');
        li.classList.remove('inactive');

        index = prevAll(li);

        setStyleSlides([
            `${-positions[index]}px`,
            '0.5s',
        ]);
    }

    function prevAll(e) {

        const prevElements = [];
        let prevElement = e.parentNode.firstElementChild;

        while (prevElement !== e) {
            prevElements.push(prevElement)
            prevElement = prevElement.nextElementSibling
        }

        return prevElements.length - 1;
    }

    const [marginLeft, transition] = styleSlides;

    return (
        <Fragment>
            <ul id="slide-menu">
                <li className="sep"></li>

                {
                    imagens.map(imagem => (
                        <li key={imagem.cod_produto} className="slide-menu-item center">
                            <img src={DOMAIN_IMG + imagem.imagem}
                                alt={imagem.imagem}
                                onClick={e => menuHandler(e)}
                            />

                        </li>

                    ))
                }

            </ul>
            <div id="slider">
                <div id="slides" style={{
                    width: widSlides,
                    marginLeft: marginLeft,
                    transition: transition
                }}>
                    {
                        imagens.map(imagem => (
                            <div key={imagem.cod_produto} className="slide center">
                                <img src={DOMAIN_IMG + imagem.imagem}
                                    alt={imagem.imagem} />
                            </div>
                        ))
                    }

                </div>

            </div>
        </Fragment>

    )
}