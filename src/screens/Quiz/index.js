
import React, { useEffect } from 'react';
// import { Lottie } from '@crello/react-lottie';
// import db from '../../../db.json';
import QuizBackground from '../../components/QuizBackground/index.js';
import QuizContainer from '../../components/QuizContainer/index.js';
import Widget from '../../components/Widget/index.js';
import Alternatives from '../../components/QuizAlternatives/index.js';
import BtnConfirm from '../../components/BtnConfirmar/index.js'
import LinkHome from '../../components/Link/index.js'
import { useRouter } from 'next/router';
import BackLinkArrow from "../../components/BackLinkArrow";
import LoadingPage from '../../components/Loading/index.js'


function QuizResult({results}) {

  const router = useRouter();

  return (
    <div>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        {/* <h1>Mandou bem, {db.name}</h1> */}
        <h2>Você marcou {results.filter((x) => x).length} pontos</h2>
        <ul>
          {results.map((result,index) => <li key = {`result__${result}`}>Pergunta {index + 1}: {result === true ? "Acertou" : "Errou"}</li>)}
        </ul>
      </Widget.Content>
      <LinkHome onClick = {() => router.push("/")}>Play Again</LinkHome>
    </div>
  )
}

function Loading () {
  return (
    <div>
      <Widget.Header>
        <h1 style = {{fontSize: "22px"}}>Loading...</h1>
      </Widget.Header>
      <Widget.Content>
        <LoadingPage/>
      </Widget.Content>
    </div>
  )
}


function Quiz ({externalQuestions, addResult, setScreenState}) {
  const [indexQuestion, setIndex] = React.useState(0);
  const question = externalQuestions[indexQuestion];
  const answerIndex = question.answer;
  const totalQuestions = externalQuestions.length;
  const [statusQuiz, setStatusQuiz] = React.useState("Playing"); // "Playing", Acerto , Erro 
  const [userAnswer, setUserAnswer] = React.useState(undefined); // select 

  let alternatives;
  let alternativeNum;

  const nextQuestion = function (e) {
    e.preventDefault();
    setIndex(indexQuestion + 1);
    setStatusQuiz("Playing");
    if (!alternatives) return ;
    alternatives.forEach((alternative) => alternative.setAttribute("disabled", false))
  }
    

  return (
    <div>
        <Widget.Header>
            <BackLinkArrow href = "/" />
            <h3>Pergunta {indexQuestion + 1} de {externalQuestions.length}</h3>
        </Widget.Header>
        <img
          alt = "Descrição"
          style = {{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
          src = {question.image}
        />
        {/* <QuizImg backgroundImage={question.image} /> */}
        <Widget.Content>
            <form onClick = {function (e) {
                e.preventDefault();
                alternatives = e.target.closest("form").querySelectorAll("button");
        
                // Id evento de click no botão 
                const alternative = e.target.closest("button");

                if (!alternative) return;

                alternativeNum = Number(alternative.getAttribute("id"));
                setUserAnswer(alternativeNum);
                
                if (statusQuiz !== "Playing") return;    
                const isAnswerCorrect = alternativeNum === answerIndex;
                addResult(isAnswerCorrect);
                
                // Se jogador Estiver jogando ou seja não selecionou nenhuma alternativa

                if (alternativeNum === answerIndex)
                {
                  setStatusQuiz("Acerto")
                }
                
                if (alternativeNum !== answerIndex)
                setStatusQuiz("Erro");

                // Terminou as Questões
                if (!(indexQuestion + 1 < totalQuestions))
                  setTimeout(() => setScreenState(screenStatus.result),1500);
              
              
             }}>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                {/* answerInder = correctAnswer  */}
                {(indexQuestion < totalQuestions) && <Alternatives question = {question} statusQuiz = {statusQuiz} answerIndex = {answerIndex} userAnswer = {userAnswer}/>}
                {/* Renderizar Botão quando o jogador selecionar  */}
                {(statusQuiz !== "Playing" && (indexQuestion + 1 < totalQuestions)) && <BtnConfirm onClick = {nextQuestion}>Next</BtnConfirm>}
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

// Recebe a props do [id].js, uma vez que a QuizPage esta sendo renderizada como um componente 
export default function QuizPage({externalBg, externalQuestions}) {
    const [screenState, setScreenState] = React.useState(screenStatus.loading); 
    const [results, setResult] = React.useState([]); // Array de resultados  
    const router = useRouter();

    function addResult(result) {
      setResult([...results, result]) 
    }

    React.useEffect(() => {
      setTimeout(() => setScreenState(screenStatus.quiz), 4000);
    },[])

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <Widget>
            {/* Renderização Condicionada */}
            {screenState === "LOADING" && <Loading/>}
            {screenState === "QUIZ" && <Quiz externalQuestions = {externalQuestions} results = {results} addResult = {addResult} setScreenState = {setScreenState} />}
            {screenState === "RESULT" && <QuizResult results = {results} />}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}

