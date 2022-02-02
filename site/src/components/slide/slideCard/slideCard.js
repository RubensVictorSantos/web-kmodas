import React, { Fragment, useEffect, useState, useRef } from 'react';
/** */
import './style.css';
import CardSimple from "../../card/cardSimple";

export default function SlideCard(props) {
    const [slidesWidth, setSlidesWidth] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [styleSlides, setStyleSlides] = useState(['0px', '0s']);
    const cards = props.cards.length ? props.cards : [props.cards];
    let positions = [];

    const sliderRef = useRef();

    const handleResize = () => {
        const widthSlider = sliderRef.current.clientWidth;

        setSlidesWidth(widthSlider * cards.length);
        setSliderWidth(widthSlider);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    });

    const handlerClassActive = (e) => {
        let li = e.target.parentElement;
        let list = document.querySelectorAll('.slide-menu-item-card');

        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
            list[i].classList.add('inactive');

        }

        li.classList.add('active');
        li.classList.remove('inactive');

    }

    // Menu item click handler
    const menuHandler = (e) => {
        let index = 0;
        let position = 0;

        handlerClassActive(e);

        cards.map((_, i) => {
            positions[i] = position
            position = position + sliderWidth;
        })

        index = prevAll(e.target.parentElement);

        setStyleSlides([
            `${-positions[index]}px`,
            '0.5s'
        ]);
    }

    const prevAll = (e) => {
        const prevElements = [];
        let prevElement = e.parentNode.firstElementChild;

        while (prevElement !== e) {
            prevElements.push(prevElement)
            prevElement = prevElement.nextElementSibling

        }

        return prevElements.length - 1;
    }

    const [marginLeftValue, transitionValue] = styleSlides;

    return (
        <Fragment>
            <div id="slider-card" ref={sliderRef}>
                <div id="slides-card" style={{
                    width: slidesWidth,
                    marginLeft: marginLeftValue,
                    transition: transitionValue
                }}>
                    {
                        cards.map((card, i) => {
                            return <CardSimple key={i}
                                title={card.nome}
                                image={card.imagem}
                                price={card.preco}
                                path={`/products/${card.cod_produto}`}
                            />
                        })
                    }
                </div>
                <ul id="slide-menu-card">
                    <li className="sep"></li>
                    {
                        cards.map((_, i) => {
                            return (
                                <li key={i} className="slide-menu-item-card center">
                                    <input type="button"
                                        onClick={e => menuHandler(e)}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}