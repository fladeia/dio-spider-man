import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 2px solid white;
    border-radius: 50%;
    background-color: var(--primary-color);
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

`

export const Line = styled.span`
  background-color: white;
  width: 50%;
  height: 2px;
  position: absolute;
`