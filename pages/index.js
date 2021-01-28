import styled from "styled-components";
import db from "../db.json"
import QuizBackground from "../src/components/QuizBackground/index.js"
import Widget from "../src/components/Widget/index.js";
import QuizLogo from "../src/components/QuizLogo/index.js";
import QuizContainer from "../src/components/QuizContainer/index.js";
import GitHubCorner from "../src/components/GitHubCorner/index.js"
import Footer from "../src/components/Footer/index.js"
import { useRouter } from "next/router"
import Input from "../src/components/Input/index.js"
import Button from "../src/components/Button/index.js"


// import { delBasePath } from "next/dist/next-server/lib/router/router";

// Criando um h1 + definindo os styles- CSS no Styled components é definido em cada tag, não é necessário usar os seletores, criar classes, os nomes das classes são gerados automaticamente, assim protegendo os elementos contra "colisão" de estilos css

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// eslint-disable-next-line max-len
// Funções no react representam os componentes - Home = homepage , elas precisam ser declaradas com primeira letra maiuscula, como se fossem constructores. Essas funções recebem como parâmetro as propriedades do component = props.

// eslint-disable-next-line max-len
// Associação: Os constructores quando são chamados com o new, cria um {} e o this do constructor aponta para este objeto vazio, em seguida o prototype do objeto vazio é linkado ao Constructor.prototype que é um outro objeto que contém todos os metodos que serão herdados via prototype chain. Na associação com os constructores as funções components, criam um elemento html vazio, this -> novo html, html herda propriedades  e metodos do seu "constructor" há um retorno dessa tag

// function Title(props) {
//   // props -> Elemento, children tudo que esta dentro do elemento pai, no caso Title
//   return <h1>{props.children}</h1>;
// }


export default function Home() {
  // Hooks: São formas que o react da para agente acessar informações e coisas que ocorrem no react quando um dado é pego ou modificado no servidor 
  const router = useRouter(); // dando acesso aos dados de roteamento para a função 
  const [name,setName] = React.useState(""); // acessa as modificações da variável name + passa estado inicial 
  console.log("Retorno do React.userState", React.useState()); // Retorna um Array que contém o valor do name e uma função que recebe como parâmetro o novo valor da variável  
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit = {function (e) {
              // Event Handler - Recebe o event 
              e.preventDefault();

              // e.target => form 
              const inputLogin = e.target.querySelector("input").value;

              // name = inputLogin;
              // Add ao histórico de navegação a página que será acessada: Navegação sem refresh
              db.name = name; // armazenando state no json
              router.push(`/quiz?name=${name}`);

            }}>  
              <Input name = "username" value = {name} placeholder = "Diz ai seu nome para jogar :)" onChange = {function (e) {
                
                // Novo Estado - React verifica se houve modificação, se houver renderiza o novo estado
                setName(e.target.value);
                // Botão:
                // const btn = e.target.parentElement.querySelector("button");
                // btn.textContent = `Jogar ${name}`
              
              }}/>
              <Button disabled = {name.length === 0}>Jogar 
               {` ${name}`}</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/henriquemelo01" />
    </QuizBackground>
  );
}

// No React não podemos renderizar um mesmo tag/elemento em um mesmo nível, assim é comum 

/*

function Input() {
  return (
    <div>
      <InputBase/>
    </div>
    // Não é possivel renderizar duas divs em um mesmo nível no render
    <div>
    
    </div>
  )
}

*/