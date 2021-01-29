import React, { Children } from "react";
import styled from "styled-components";

const LinkBase = styled.a`
    display: flex;
    justify-content: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin-bottom: 10px;

    color: #9CA9EF;

    transform: matrix(1, 0, 0, 1, 0, 0);
`

function LinkHome ({children, onClick}) {
    return (
        <div>
            <LinkBase onClick = {onClick}>{children}</LinkBase>
        </div>
    )
}

export default LinkHome;