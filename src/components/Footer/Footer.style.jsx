import styled from "styled-components";

export const ButtonStyled = styled.button(({cor}) => ({
    
    display: "flex",
    flexDirection: "column",
    background: cor ? "red" : "blue"

}))

export const ButtonStyled2 = styled.button`
    display: flex;
    background: blue;
`
