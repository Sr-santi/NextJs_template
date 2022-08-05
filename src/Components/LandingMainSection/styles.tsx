import styled, { keyframes } from "styled-components"

interface TitleProps {
    reverse?: boolean
    time: string
  }

const widthModfier = keyframes`
    0% { width: 0%; }
    50% { width: 50%; }
    100% { width: 100%; }
`

export const LandingMainSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

export const Title = styled.h1<TitleProps>`
    font-size: 76px;
    max-widht: 550px;
    font-weight: 600;
    font-family: 'Montserrat';
    z-index: 10;

    & span {
        color: #cd134b;
        font-weight: 700;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            background-color: #cd134b;
            height: 5px;
            width: 0%;
            left: 0;
            bottom: -10px;
            animation: ${widthModfier} ${(props) => props.time} linear infinite ${(props) => (props.reverse ? "alternate-reverse" : "alternate")} ;
        }
    }
`

export const SubTitle = styled.p`
    margin-top: 25px;
    font-weight: 500;
    font-size: 24px;
    max-width: 750px;
    width: 100%;
`