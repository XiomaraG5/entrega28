import styled from "styled-components";


export const HomeContainer= styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const TitleContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
    color: #FFFFFE;
`

export const CategoriasContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CssJContainer= styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
` 

export const Text= styled.p`
    color: #FFFFFE;
    font-weight: bold;
    text-align: center;
    position: absolute;
`

export const Circulo= styled.div`
    border: 9px solid #DDDDDD;
    border-radius: 50%;
`

export const ImgCategory= styled.img`
    border: 5px solid black;
    border-radius: 50%;
    max-height: 100%;
    max-width: 100%;
    width: 70px;
    height: 70px;
`

export const ButtonContainer= styled.div`
    background: #232E35;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 97.5%;
    position:fixed ;
    bottom: 0;
`

export const Botones= styled.div`
    background: none;    
    
`

export const ImgBttn= styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 50px;
    height: 50px;
    padding: 5px;
`