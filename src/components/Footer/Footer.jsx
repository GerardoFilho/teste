import { useState } from 'react'
import * as S from './Footer.style'
import styled from 'styled-components'





const Footer = () => {
    const [oi, setOi] = useState(false)
    
    const ButtonStyled2 = styled.button`
        display: flex;
        background: ${oi} ? "green" : "yellow";
    `
    const bruno = () => {
        setOi(prev => !prev)
    }
  return (
    <>
    <h1>
        Projeto lixo de merda
    </h1>

    <S.ButtonStyled cor={oi} onClick={() => bruno()}>botao 1</S.ButtonStyled>
    <ButtonStyled2  cor={oi} onClick={() => bruno()}>botao 2</ButtonStyled2>
    </>
  )
}

export default Footer