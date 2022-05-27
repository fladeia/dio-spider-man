import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--primary-color);
  overflow: hidden;

    
  &::before { //TODO 
    content: "";
    background-image: url(${props => props.bg || null});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${props => props.bgOpacity};
    transition: background-image 1s ease-in-out, opacity 1s ease-in-out;
  }
`