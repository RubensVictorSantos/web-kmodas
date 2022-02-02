import React, { Fragment, useEffect, useState } from 'react';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../../link_config';

export default function SlideSideBar(props) {
    const [widSlides, setWidSlides] = useState(0);
    const [widSlider, setWidSlider] = useState(0);
    const [styleSlides, setStyleSlides] = useState(['0px', '0s']);
    const imagens = props.imagens.length ? props.imagens : [props.imagens];
    let positions = [];

    useEffect(() => {
        const handleResize = () => {
            let widthSlider = document.getElementById("slider-sb");

            setWidSlides(widthSlider.clientWidth * imagens.length);
            setWidSlider(widthSlider.clientWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })

    // Menu item click handler
    function menuHandler(e) {

        let li = e.target.parentElement,
            list = document.querySelectorAll('.slide-menu-item-sb'),
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
            <ul id="slide-menu-sb">
                <li className="sep-sb"></li>
                {
                    imagens.map(imagem => (
                        <li key={imagem.cod_produto} className="slide-menu-item-sb center">
                            <img src={DOMAIN_IMG + imagem.imagem}
                                alt={imagem.imagem}
                                onClick={e => menuHandler(e)}
                            />
                        </li>
                    ))
                }
            </ul>
            <div id="slider-sb">
                <div id="slides-sb" style={{
                    width: widSlides,
                    marginLeft: marginLeft,
                    transition: transition
                }}>
                    {
                        imagens.map(imagem => (
                            <div key={imagem.cod_produto} 
                                className="slide-sb center"
                                style={{ width: widSlider + "px" }}
                                >
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