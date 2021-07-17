import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #95dada;
    width: 265px;
    padding: 1em;
    border-radius: 1em;
    margin: 0 auto;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
    }
`

export const CardImage = styled.img`
    height: 180px;
    width: 180px;
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 1em;
`

export const CardName = styled.h2`
    font-size: 1.5rem;
    margin-bottom: .5em;
`

export const CardItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
`

export const CardEmail = styled.p`
    font-size: 1rem;

`