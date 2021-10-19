import React, { useEffect, useLayoutEffect, useState } from 'react';
/** */
import '../../card/style.css'
import './style.css'
import { DOMAIN_IMG, DOMAIN_API } from '../../../link_config';

export default function Carousel(props) {
    const [produto, setProduto] = useState([]),
        [widthWindow, setWidthWindow] = useState(0),
        [widthCarousel, setWidthCarousel] = useState(0),
        [styleCarousel, setStyleCarousel] = useState(['', 'translateX(0px)']),
        [porcentagem, setPorcentagem] = useState(0);

    const carousel = document.getElementById("carousel");

    let { size, scroll } = props;

    useEffect(() => {

        let porcentagemWrap = (document.querySelector('.wrap').clientWidth * 100) / window.innerWidth;
        setPorcentagem(porcentagemWrap);

        setWidthCarousel(((window.innerWidth * porcentagem) / 100) * size);

        fetch(`${DOMAIN_API}products/status=1/limit=${size}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProduto(result);
                },
                (error) => {
                    console.log('Erro ao carregar carousel');
                }
            )


    }, [size, scroll, porcentagem])

    useEffect(() => {
        // Automatizando o slide
        const id = setInterval(() => shiftSlide(-1), 10000);
        return () => clearInterval(id); // Limpando o setInterval 
    });

    useLayoutEffect(() => {

        let porcentagemWrap = (document.querySelector('.wrap').clientWidth * 100) / window.innerWidth;
        setPorcentagem(porcentagemWrap);

        const handleResize = (porcentagem) => {
            setWidthWindow(window.innerWidth);
            setWidthCarousel(((window.innerWidth * porcentagem) / 100) * size);

        }
        window.addEventListener("resize", handleResize);

        handleResize(porcentagem);

        return () => window.removeEventListener("resize", handleResize);
    }, [porcentagem, size])

    const shiftSlide = (direction) => {

        if (carousel === null) { return }

        if (styleCarousel[0] === '0.5s') { return }

        if (direction === -1) {

            setStyleCarousel(['0.5s', 'translateX(' + direction * ((widthWindow * porcentagem) / 100) + 'px)']);

            setTimeout(() => {

                carousel.lastChild.after(carousel.firstChild);
                setStyleCarousel(['', 'translateX(0px)'])

            }, 700);

        }

        if (direction === 1) {
            carousel.firstChild.before(carousel.lastChild);

            setTimeout(() => {
                setStyleCarousel(['', 'translateX(0px)']);

            }, 700);
        }
    }

    const [transition, transform] = styleCarousel;

    return (
        <div className="wrap center" id="wrap_carousel">
            <div className="window">
                <div id="carousel" style={{
                    transition: transition,
                    transform: transform,
                    width: widthCarousel
                }}>
                    {
                        produto.map(produto => (
                            <div key={produto.cod_produto} className="carousel-slide">
                                <img className='carousel-img'
                                    src={DOMAIN_IMG + produto.imagem}
                                    alt={produto.imagem} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div onClick={() => shiftSlide(1)} id="prev"></div>
            <div onClick={() => shiftSlide(-1)} id="next"></div>

        </div>
    );
}