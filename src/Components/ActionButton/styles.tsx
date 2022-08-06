import styled from "styled-components"

interface ButtonProps {
    size?: string
  }

export const ActionButtonWrapper= styled.div<ButtonProps>`
    background: linear-gradient(50deg,#cd4367,#e90e50);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 2px 0 #0000000d;
    padding: ${(props) => props.size === "small" ? "10px 40px" : props.size === "medium" ? "20px 50px" : "25px 65px" } ;
    font-weight: 800;
    text-shadow: 0 -1px 0 #0000001f;
    border-radius: 15px;
    font-size: ${(props) => props.size === "small" ? "18px" : props.size === "medium" ? "28px" : "36px"};
    transition: all 0.5s;
    position: relative;
    z-index: 10;

    &:hover {
        background: linear-gradient(180deg,#df7e97,#cf174f);
    }
`

