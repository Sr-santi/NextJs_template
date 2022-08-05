import styled from "styled-components"

export const ActionButtonWrapper= styled.div`
    background: linear-gradient(50deg,#cd4367,#e90e50);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 2px 0 #0000000d;
    padding: 10px 40px;
    font-weight: 800;
    text-shadow: 0 -1px 0 #0000001f;
    border-radius: 15px;
    font-size: 18px;
    transition: all 0.5s;

    &:hover {
        background: linear-gradient(180deg,#df7e97,#cf174f);
    }
`

