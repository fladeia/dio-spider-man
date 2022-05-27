import styled from "styled-components";

export const Container = styled.div`
  height: ${props => props.pages ? '40rem' : null};
  position: relative;
  display: flex;
  flex-direction: ${props => props.pages ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.pages ? '0' : '3rem'};;
  gap: 2.75rem;

  div {
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
`