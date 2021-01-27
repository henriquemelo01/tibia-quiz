import react from "react";
import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground/index.js"
import QuizImg from "../src/components/QuizImg/index.js"
import { QuizContainer } from "./index.js";
import Widget from "../src/components/Widget/index.js";
import Alternatives from "../src/components/QuizAlternatives/index.js";


// const alternatives = function () {
//     db.questions.alternatives.forEach( function (alternative) {
//         return <Widget.Button>{alternative}</Widget.Button>
//     })
// };


const alternatives = db.questions.map((question,i) => question.alternatives.map((alternative) => <Widget.Button>{alternative}</Widget.Button>));
console.log(alternatives)


// Renderizar Página 
export default function QuizPage() {
    return (
        <QuizBackground backgroundImage = {db.bg}>
           <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>{db.questions[0].title}</h1>
                    </Widget.Header>
                    <QuizImg backgroundImage = {db.quizImg}/>
                     {/* Componenente que vai exibir a imagem  */}
                    <Widget.Content>
                        <h1>{db.questions[0].description}</h1>
                        <Alternatives/>
                    </Widget.Content>
                </Widget>
           </QuizContainer>
        </QuizBackground>
    );
};

// Hook: São formas que o react prove para gnt, para biblioteca e o proprio react darem acesso a informações, coisas que acontecem quando um dado é pegado pelo servidor 