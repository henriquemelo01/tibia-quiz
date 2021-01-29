  
import React from "react";
import styled from "styled-components";


const Alternative = styled.button`
  margin: 0.5rem 0 0.5rem 0;
  width: 100%;
  height: 32px;
  border: #221266 solid 1px;
  background: linear-gradient(#0e4686,#221266 );
  border-radius: 0.25rem;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
  color: #FFFFFF;
  opacity: .85;
  &:hover,
    &:focus{
    outline: 0;
    opacity: 1;
  }
`
// Percorre todas as atlernativas das questões e retorna um componente (Alternative) para cada uma delas 



const alternatives = function (question) {
  return question.alternatives.map((alternative,alternativeId) => <Alternative id = {alternativeId} type = "submit">{alternative}</Alternative>);
} 
 
/*
  Checar resposta: 
  1) Passar index do botão clicado
  2) Teste + Renderizar 
    - Se indexClicado === question.answer && <Button state = "Acerto" /> 
    - Se indexClicado !== question.answer && <Buton state = "Errou" />
  3) Desabilitar todos os demais botões; Reenderizar, passando statusBtnClicked = {true}
*/


const alternatives2 = function (question,statusQuiz, correctAnswer,userAnswer) {
  const status = statusQuiz;
  return (question.alternatives.map((alternative,alternativeId) => {
    const alternativeKey = `alternative__${alternativeId}`;
    // Index Btn para renderizar um elemento de cor diferente
    if (statusQuiz === "Playing")
      return <Alternative key = {alternativeKey} id = {alternativeId} type = "submit">{alternative}</Alternative>
    
    // correctAnswer = alternativeNum  
    if (statusQuiz === "Acerto") {
      if (userAnswer === alternativeId){
        return <Alternative style = {{ background: "#4CAF50" }} key = {alternativeKey} id = {alternativeId} type = "submit">{alternative}</Alternative>
      } else {
        return <Alternative disabled = {true} key = {alternativeKey} id = {alternativeId} type = "submit">{alternative}</Alternative>
      }
    }

    if (statusQuiz === "Erro") {
      if (userAnswer === alternativeId){
        return <Alternative style = {{ background: "#FF5722" }} key = {alternativeKey} id = {alternativeId} type = "submit">{alternative}</Alternative>
      }
        else {
          return <Alternative disabled = {true} key = {alternativeKey} id = {alternativeId} type = "submit">{alternative}</Alternative>
      }
    }
  })
  )
}
  
  
// Criando Component usando ES6 class -- Forma + Antiga de "criar" Components
class Alternatives extends React.Component {
    render() {
        return (
            <div>
                {/* Quando passo um array de components como parâmetro, o react dom renderiza um por um {} só pode co nter estruturas que retornam algo ex function, array,var.*/}
                {/* {alternatives(this.props.question)} */}
                {alternatives2(this.props.question, this.props.statusQuiz, this.props.answerIndex, this.props.userAnswer)}
            </div>
        )
    }
}

export default Alternatives;