import React, { useEffect, useState } from 'react';
/** */
import './style.css';
import { DOMAIN_IMG } from '../../link_config';

export default function Slide(props) {

    const [widSlides, setWidSlides] = useState(0);
    const [styleSlides, setStyleSlides] = useState([]);
    const produto = props.produto;
    let positions = [];

    useEffect(() => {
        setWidSlides(window.innerWidth * produto.length);

    }, [produto])

    // Menu item click handler
    function menuHandler(e){

        let li = e.target.parentElement,
            list = document.querySelectorAll('.slide-menu-item'),
            position = 0,
            index = 0;

        for (let i = 0; i < list.length; i++) {

            list[i].classList.remove('active');
            list[i].classList.add('inactive');

            positions[i] = position
            position = position + window.innerWidth;
        }

        li.classList.add('active');
        li.classList.remove('inactive');

        index = prevAll(li);

        setStyleSlides([
            `${-positions[index]}px`,
            '0.5s'
        ])
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
        <div id="slider">
            <div id="slides" style={{ 
                    width: widSlides, 
                    marginLeft: marginLeft, 
                    transition: transition }}>
                {
                    // produtos.map(produto => (
                        <div className="slide center" key={produto.cod_produto}>
                            <img src={DOMAIN_IMG + produto.imagem}
                                alt={produto.imagem} />
                        </div>
                    // ))
                }

            </div>

            <ul id="slide-menu">
                <li className="sep"></li>
                {
                    // produtos.map(produto => (
                        <li key={produto.cod_produto} className="slide-menu-item center">
                            <img src={DOMAIN_IMG + produto.imagem}
                                alt={produto.imagem}
                                onClick={e => menuHandler(e)}
                            />

                        </li>
                    // ))
                }
            </ul>
        </div>
    )
}