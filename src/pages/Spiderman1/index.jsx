import * as C from './styles'
import { CarouselConttroler } from '../../components/CarouselConttroler'
import spider from '../../assets/images/icons/spider.svg'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/spiderman-tobey/movie-01/logo.png'
import { RiPlayCircleFill } from 'react-icons/ri'
import { IconContext } from "react-icons";
import image1 from '../../assets/images/spiderman-tobey/movie-01/gallery/image-01.png'
import image1Full from '../../assets/images/spiderman-tobey/movie-01/gallery/image-01-full.jpg'
import image2 from '../../assets/images/spiderman-tobey/movie-01/gallery/image-02.png'
import image2Full from '../../assets/images/spiderman-tobey/movie-01/gallery/image-02-full.jpg'
import image3 from '../../assets/images/spiderman-tobey/movie-01/gallery/image-03.png'
import image3Full from '../../assets/images/spiderman-tobey/movie-01/gallery/image-03-full.jpg'

import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

export const Spiderman1 = () => {

  function Fancybox(props) {
    const delegate = props.delegate || "[data-fancybox]";

    useEffect(() => {
      const opts = props.options || {};

      NativeFancybox.bind(delegate, opts);

      return () => {
        NativeFancybox.destroy();
      };
    }, []);

    return <>{props.children}</>;
  }

  return (
    <C.Container>

      <C.LeftContent>
        <Link to='/'>
          <img src={spider} alt='Ícone aranha'></img>
        </Link>
        <CarouselConttroler pages></CarouselConttroler>
      </C.LeftContent>

      <C.RightContent>
        <C.TopContent>
          <img src={logo} alt='Logo Spiderman' title='Spiderman 2002'></img>

          <C.Description>
            <C.Pills>
              <ul>
                <li>Ano: 2002</li>
                <li>Diretor: Sam Raimi</li>
              </ul>
            </C.Pills>
            <p><strong>Sinopse:</strong>&nbsp;Depois de ser picado por uma aranha geneticamente modificada em uma
              demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los
              para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém,
              ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes
              para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico
              Duende Verde.</p>
          </C.Description>
          <IconContext.Provider value={{ color: 'var(--primary-color)', size: '2rem' }}>
            <C.TrailerButton>
              <Link to='https://www.youtube.com/watch?v=TYMMOjBUPMM'>
                <RiPlayCircleFill />
                <span className='label'>Assistir Trailer</span>
              </Link>
            </C.TrailerButton>
          </IconContext.Provider>
        </C.TopContent>

        <C.BottomContent>
          <Fancybox options={{ infinite: false }}>
            <C.Gallery id='gallery'>
              <ul>
                <li>
                  <a data-fancybox='gallery' href={image1Full}>
                    <img src={image1} alt='Cena do filme Homem aranha'></img>
                  </a>
                </li>
                <li>
                  <a href={image2Full} data-fancybox='gallery'>
                    <img src={image2} alt='Cena do filme Homem aranha'></img>
                  </a>
                </li>
                <li>
                  <a href={image3Full} data-fancybox='gallery'>
                    <img src={image3} alt='Cena do filme Homem aranha'></img>
                  </a>
                </li>
              </ul>
            </C.Gallery>

          </Fancybox>
        </C.BottomContent>
      </C.RightContent>
    </C.Container>
  )
}
