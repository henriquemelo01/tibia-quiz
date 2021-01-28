/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable semi */
/* eslint-disable max-len */

import React from 'react';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground/index.js';
import QuizImg from '../src/components/QuizImg/index.js';
import QuizContainer from '../src/components/QuizContainer/index.js';
import Widget from '../src/components/Widget/index.js';
import Alternatives from '../src/components/QuizAlternatives/index.js';



// Renderizar Página
export default function QuizPage() {
    const totalQuestions = db.questions.length;
    const [indexQuestion, setIndex] = React.useState(0);
    const question = db.questions[indexQuestion];
    let stateBtn = false;
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pergunta {indexQuestion + 1} de {db.questions.length}</h1>
            {/* <h1>{db.questions[0].title}</h1> */}
          </Widget.Header>
          <QuizImg backgroundImage={question.image} />
          {/* Componenente que vai exibir a imagem  */}
          <Widget.Content>
            <h1>{question.description}</h1>
            {/* Ao passar um array que contém JSX's o react percorre pelo mesmo retornando cada um destes elementos */}
            <form onClick = {function (e) {
                e.preventDefault();
                const alternative = e.target.closest("button");
                if (!alternative) return;
                const alternativeNum = e.target.getAttribute("id");
                stateBtn = !stateBtn;
                console.log(alternativeNum,stateBtn);
            }}>
                <Alternatives question = {question}/>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

// Hook: São formas que o react prove para gnt, para biblioteca e o proprio react darem acesso a informações, coisas que acontecem quando um dado é pegado pelo servidor
