/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable semi */
/* eslint-disable max-len */

import React from "react";
import styled from "styled-components";
import db from "../../../db.json";
import Widget from "../Widget/index.js"

const Alternative = styled.button`
  margin: 0.5rem 0 0.5rem 0;
  width: 100%;
  height: 32px;
  border: #221266 solid 1px;
  background: linear-gradient(#0e4686,#221266 )
;
  border-radius: 0.25rem;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
  color: #FFFFFF;
  opacity: .85;
  &:hover,
    &:focus{
    opacity: 1;
  }

`
// Percorre todas as atlernativas das questões e retorna um componente (Alternative) para cada uma delas 



const alternatives = function (question) {
  return question.alternatives.map((alternative,alternativeId) => <Alternative id = {alternativeId} type = "submit">{alternative}</Alternative>);
} 
  


// const alternatives = db.questions.map((question,i) => question.alternatives.map((alternative) => <Alternative>{alternative}</Alternative>));



// Criando Component usando ES6 class -- Forma + Antiga de "criar" Components
class Alternatives extends React.Component {
    render() {
        return (
            <div>
                {/* Quando passo um array de components como parâmetro, o react dom renderiza um por um {} só pode conter estruturas que retornam algo ex function, array,var.*/}
                {alternatives(this.props.question)}
            </div>
        )
    }
}

export default Alternatives;