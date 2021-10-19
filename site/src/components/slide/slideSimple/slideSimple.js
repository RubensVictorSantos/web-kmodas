import React, { Fragment, useEffect, useState } from 'react';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../../link_config';

export default function SlideSimple(props) {
    const [widSlides, setWidSlides] = useState(0);
    const [widSlider, setWidSlider] = useState(0);
    const [styleSlides, setStyleSlides] = useState(['0px', '0s']);
    const imagens = props.imagens.length ? props.imagens : [props.imagens];
    let positions = [];

    useEffect(() => {

        /** Function to handle the resize of the element. */
        const handleResize = () => {
            let widthSlider = document.getElementById("slider-simple");

            setWidSlides(widthSlider.clientWidth * imagens.length);
            setWidSlider(widthSlider.clientWidth);
            // console.log(positions);  
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    })

    const handlerClassActive = (e) => {
        let li = e.target.parentElement;
        let list = document.querySelectorAll('.slide-menu-item-simple');

        for (let i = 0; i < list.length; i++) {

            list[i].classList.remove('active');
            list[i].classList.add('inactive');

        }

        li.classList.add('active');
        li.classList.remove('inactive');

    }

    // Menu item click handler
    function menuHandler(e) {
            let list = document.querySelectorAll('.slide-menu-item-simple');
            let position = 0,
            index = 0;

        handlerClassActive(e)

        for (let i = 0; i < list.length; i++) {

            positions[i] = position
            position = position + widSlider;

        }

        index = prevAll(e.target.parentElement);

        // console.log(e.target.parentElement);
        // console.log(index);

        setStyleSlides([
            `${-positions[index]}px`,
            '0.5s',
        ]);
    }

    function prevAll(e) {
        const prevElements = [];
        let prevElement = e.parentNode.firstElementChild;

        console.log(e.parentNode.firstElementChild);

        while (prevElement !== e) {
            prevElements.push(prevElement)
            prevElement = prevElement.nextElementSibling

            console.log(prevElement);

        }

        return prevElements.length - 1;
    }

    const [marginLeft, transition] = styleSlides;

    // console.log(widSlides);

    return (
        <Fragment>
            <div id="slider-simple">
                <div id="slides-simple" style={{
                    width: widSlides,
                    marginLeft: marginLeft,
                    transition: transition
                }}>
                    {
                        imagens.map(imagem => (
                            <div key={imagem.cod_produto}
                                className="slide-simple center"
                                style={{ width: widSlider + "px" }}
                            >
                                <img src={DOMAIN_IMG + imagem.imagem}
                                    alt={imagem.imagem} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <ul id="slide-menu-simple">
                <li className="sep"></li>
                {
                    imagens.map(imagem => (
                        <li key={imagem.cod_produto} className="slide-menu-item-simple center">
                            <input type="button"
                                onClick={e => menuHandler(e)}
                            />
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}