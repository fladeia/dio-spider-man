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

export const Nav = styled.nav`
  position: relative;

  ul {
    padding: 1rem 0;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 1.5rem;
  }
`