import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: row nowrap; 
  `

export const LeftContent = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: black;
  z-index: 1;

  img {
    width: 50px;
    height: 50px;
  }
`

export const RightContent = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 130px;
  position: relative;
`