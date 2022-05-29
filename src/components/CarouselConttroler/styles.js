import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: absolute;
bottom: 1.5rem;

.active {
  background-color: var(--white);
  border: 2px solid var(--primary-color);
  outline: 2px solid white;
  color: var(--primary-color)
}

ul {
    height: ${props => props.pages ? '40rem' : null};
    display: flex;
    flex-direction: ${props => props.pages ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
    gap: 2.75rem;

  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid white;
    border-radius: 50%;
    background-color: ${props => props.pages ? 'black' : 'var(--primary-color)'};
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    

    &:hover {
      transform: scale(1.1);
      background-color: var(--white);
      color: ${props => props.pages ? 'black' : 'var(--primary-color)'};
    }
  }
`

export const Line = styled.span`
  background-color: white;
  width: ${props => props.pages ? '2px' : '50%'};
  height: ${props => props.pages ? '110%' : '2px'};
  position: absolute;
  top: ${props => props.pages ? '-5%' : '50%'};
  left: ${props => props.pages ? '50%' : '25%'};
`