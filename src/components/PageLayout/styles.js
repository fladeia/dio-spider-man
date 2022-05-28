import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-flow: row nowrap; 
  background-color: gray;
  background-image: url(${props => props.bg});
  background-size: cover;
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

export const TopContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 60%;
    height: 16rem;
    margin-top: 50px;
    margin-left: 0;
    margin-bottom: 30px;
  }
`

export const BottomContent = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Description = styled.div`
  background-color: rgba(0,0,0,.7);
  max-width: 50%;
  padding: 20px;
  border-radius: 10px;

  p {
    line-height: 170%;
  }
`

export const Pills = styled.div`
  margin-bottom: 1rem;

  ul {
    display: flex;
    flex-direction: row;
  }

  ul li {
    background-color: var(--primary-color);
    color: white;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 20px;
    text-transform: uppercase;
  }

  ul li:first-child{
    margin-left: 0;
  } 
`

export const TrailerButton = styled(Description)`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Gallery = styled.div`
  padding: 20px;

  ul {
    display: flex;
    gap: 2rem;
  }

  img {
    width: 300px;
    height: 200px;
    border: solid 6px var(--white);
    border-radius: 15px;
  }
`