
import React from 'react';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground/index.js';
import QuizImg from '../src/components/QuizImg/index.js';
import QuizContainer from '../src/components/QuizContainer/index.js';
import Widget from '../src/components/Widget/index.js';
import Alternatives from '../src/components/QuizAlternatives/index.js';


function Loading () {
  return (
    <div>
      <Widget.Header>
        <h1>Loading...</h1>
      </Widget.Header>
      <Widget.Content>
        <p> LOADING -|- </p>
      </Widget.Content>
    </div>
  )
}


function Quiz () {
  const [indexQuestion, setIndex] = React.useState(0);
  const question = db.questions[indexQuestion];
  const answerIndex = question.answer;
  const totalQuestions = db.questions.length;
  const [statusQuiz, setStatusQuiz] = React.useState("Playing"); // "Playing", Acerto , Erro 

  return (
    <div>
        <Widget.Header>
            <h1>Pergunta {indexQuestion + 1} de {db.questions.length}</h1>
        </Widget.Header>
        <QuizImg backgroundImage={question.image} />
        <Widget.Content>
            <form onClick = {function (e) {
                e.preventDefault();
                const alternatives = e.target.closest("form").querySelectorAll("button");
                alternatives.forEach((alternative) => alternative.setAttribute("disabled", true))
                const alternative = e.target.closest("button");
                if (!alternative) return;
                const alternativeNum = Number(e.target.getAttribute("id"));
                if (alternativeNum === answerIndex)
                  setStatusQuiz("Acerto")
                
                if (alternativeNum !== answerIndex)
                setStatusQuiz("Erro")

             }}>
                <h1>{question.description}</h1>
                <Alternatives question = {question} statusQuiz = {statusQuiz} answerIndex = {answerIndex} />
            </form>
        </Widget.Content>
    </div>
  )
};

// Estados da tela 
const screenStatus = {
  loading: "LOADING",
  quiz: "QUIZ",
  result: "RESULT",
}


// Renderizar Página
export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStatus.loading);
    // let stateBtn = false;

    // React Hook - useEffect(callBack, [dependencias]) : A call back é executada quando uma variável muda, caso não tenha nenhuma depencia a call back só será executada uma única vez. 
    React.useEffect(() => {
      setTimeout(() => setScreenState(screenStatus.quiz), 1100);
    })

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
            {/* Renderização Condicionada */}
            {screenState === "LOADING" && <Loading/>}
            {screenState === "QUIZ" && <Quiz/>}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

// Hook: São formas que o react prove para gnt, para biblioteca e o proprio react darem acesso a informações, coisas que acontecem quando um dado é pegado pelo servidor


// React.useState

/*
 const [num,setNum] = React.useState(0), num = 0  (estado inicial)
 setNum(0) -> Muda valor da variável num + renderiza página novamente. Equivalente a setNum(value) + document.element.textContent = num

*/

// React.useEffect(callBack, [depencias]); //