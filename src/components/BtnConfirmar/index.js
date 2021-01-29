import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
margin-top: 10px;
width: 100%;
height: 36px;

background: #E91E63;
/* 1 dp */

box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
border-radius: 4px;

font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height, or 114% */

        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #FFFFFF;  
`
const BtnConfirm = function (props) {
    return (
        <div>
            <ButtonBase onClick = {props.onClick}>
                {props.children}
            </ButtonBase>
        </div>
    )
}
export default BtnConfirm;

