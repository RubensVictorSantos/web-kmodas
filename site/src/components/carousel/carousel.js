import React, { useEffect, useLayoutEffect, useState } from 'react';
/** */
import './style.css'
import { DOMAIN_IMG, DOMAIN_API } from '../../link_config';

export default function CarouselTeste(props) {

    const [produto, setProduto] = useState([]),
        [widWindow, setWidWindow] = useState(0),
        [widCarousel, setWidCarousel] = useState(0),
        [styleCarousel, setStyleCarousel] = useState(['', 'translateX(0px)']);

    const carousel = document.getElementById("carousel");

    let { size, scroll } = props

    const shiftSlide = (direction) => {

        if (carousel === null) {
            return
        }

        if (styleCarousel[0] === '0.5s') {
            return
        }

        if (direction === -1) {

            setStyleCarousel(['0.5s', 'translateX(' + direction * widWindow + 'px)']);

            setTimeout(() => {

                carousel.lastChild.after(carousel.firstChild);
                setStyleCarousel(['', 'translateX(0px)'])

            }, 700);

        }

        if (direction === 1) {

            // setStyleCarousel(['0.5s', `translateX(${direction * widWindow}px)`]);
            carousel.firstChild.before(carousel.lastChild)

            setTimeout(() => {
                setStyleCarousel(['', 'translateX(0px)']);

            }, 700);
        }
    }
    
    useEffect(() => {

        setWidCarousel(window.innerWidth * size);

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

    }, [size, scroll])

    useEffect(() => {
        // Automatizando o slide
        const id = setInterval(() => shiftSlide(-1), 10000);
        return () => clearInterval(id); // Limpando o setInterval 
    });

    useLayoutEffect(() => {

        const handleResize = () => {
            setWidWindow(window.innerWidth);
            setWidCarousel(window.innerWidth * size);

        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })

    const [transition, transform] = styleCarousel;

    return (
        <div className="wrap center">
            <div className="window">
                <div id="carousel" style={{
                    transition: transition,
                    transform: transform,
                    width: widCarousel
                }}>

                    {
                        produto.map(produto => (
                            <div key={produto.cod_produto} className="carousel-slide" id={`slide-` + produto.cod_produto}>
                                <img className='carousel-img'
                                    src={DOMAIN_IMG + produto.imagem}
                                    alt={produto.imagem} />
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="center">
                <span onClick={() => shiftSlide(1)} id="prev"></span>
                <span onClick={() => shiftSlide(-1)} id="next"></span>
            </div>
        </div>
    );
}