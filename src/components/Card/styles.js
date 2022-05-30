import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  perspective: 3000px;
`

export const CardCarousel = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw / 3 - 10%);
  transform-style: preserve-3d;
  transition: transform 0.4s ease-in;
  transform: translateY(0vw) rotateY(${props => props.carouselSelected}deg);

  .cards:nth-child(1) {
    transform: rotateY(0deg) translateZ(48rem);
  }

  .cards:nth-child(2) {
    transform: rotateY(120deg) translateZ(46vw);
  }

  .cards:nth-child(3) {
    transform: rotateY(240deg) translateZ(46vw);
  }
`

export const CardContainer = styled.div`
  border: 0.5rem solid white;
  width: 100%;
  height: 60vh;
  position: absolute;
  transition: filter .5s ease-in-out;
  
  .hoverd {
    transform: scale(1.4);
    filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, .5));
  }
  
  .disable {
    filter: grayscale(100%);
  }
  
  .textHover {
    bottom: 50%;
  }
`

export const CardBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: ${props => props.cardOpacity};
  transition: opacity 1s ease-in-out;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 1s ease-in-out;
`

export const CardText = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: bottom 1s ease-in-out;
`
