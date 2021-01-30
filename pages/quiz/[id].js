import react from "React";
import QuizScreen from "../../src/screens/Quiz";
import { ThemeProvider } from "styled-components";

// Next: Resolve problemas de roteamento - Paginas Dinâmicas, server side rendering , páginas estáticas 

// Pagina QuizExterna

// Recebe a props retornada no getServerSideProps
export default function QuizDaGaleraPage({dbExterno}) {
    return (
          <ThemeProvider theme={dbExterno.theme}>
              <QuizScreen externalBg = {dbExterno.bg} externalQuestions =   {dbExterno.questions}/>
          </ThemeProvider>
    )
}

// Toda vez que recebermos uma chamada direto nesta URL via servidor, a página carrega um código no lado do servidor
// OBS:  Context é um objeto que tem todas as informações do servidor - url link, cookies, id do [id.js] => página do quiz externo

// A função getServerSideProps monta seu html com os dados que são retornados no props : {}
export async function getServerSideProps(context) {
      const [projectName, githubUser] = context.query.id.split("___");

      try {

        const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
          .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
              return respostaDoServer.json();
            }
  
            throw new Error("Falha em pegar os dados")
          })
          .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
          // .catch((err) => {
          //   console.error(err)
          // })
  
          // console.log("dbExterno: ", dbExterno);
          return {
            props: {
              // .getServerSide() Monta o HTML e junta com os dados que serão retornados
              dbExterno,
            },
          };
      } catch (err) {
        throw new Error(err);
      }
} 



/*  Anotações:

    fetch() - é uma api responsável por pegar dados de uma url -> Faz uma requisição (promisses)
        .then(respostaDoServer) executa a callback se a requisição for aceita, 
        .catch(erro) - trata o erro da requisição, a callBack recebe o erro como parâmetro (erro do fetch + erro dentro do then) 

*/