import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* perspective: 3000px; */
`

export const CardContainer = styled.div`
  position: relative;
  border: 0.5rem solid white;
  width: 30%;
  height: 70vh;
  transition: filter 0.5s ease-in-out;
  
  .hoverd {
    transform: scale(1.4);
    filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, .5));
  }
  
  .disable {
    filter: grayscale(100%);
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
  width: 100%;
  bottom: 0;
  transition: bottom 1s ease-in-out;
`
