import react from "react";
import styled from "styled-components";


const ButtonBase = styled.button`
    margin: 0.5rem 0 0.5rem 0;
    width: 100%;
    height: 32px;
    border: #ede7f6 solid 1px;
    background: #979797;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 16px;
    font-size: 14px;
    color: #FFFFFF;
    opacity: .50;
    &:hover,
      &:focus{
      opacity: 1;
      }
`

export default function Button({disabled,children}) {
    return (
        <ButtonBase disabled = {disabled}>{children}</ButtonBase>
    )
}

