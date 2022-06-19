import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a1c;
    color: #fff;
  }

  footer {
    text-align: center;
    margin-top: 100px;
  }
`

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flex};
  flex-direction: column;
  margin: 5rem 0;
`

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 2rem;
`
export const Inputs = styled.div`
  ${flex}
  gap: 30px;
`

export const Search = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px 10px 10px 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: rgb(243, 244, 246);
  color: #000;
`
export const Select = styled.select`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  font-size: 1rem;
  padding-left: 10px;
`

export const Table = styled.table`
  overflow: scroll;
  overflow: auto;
`

export default GlobalStyle;