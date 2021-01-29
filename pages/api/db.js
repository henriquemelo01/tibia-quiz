import db from "../../db.json";

//Lambda Server - Criando uma API em Json -> Função captura o request 
export default function dbHandler(request, response) { 

    // Config - Public API 
    if (request.method === "OPTIONS") {
        response.status(200).end();
        return;
    }

    response.setHeader("Acess-Control-Allow-Credentials", true);
    response.setHeader("Acess-Control-Allow-Origin", "*");
    response.setHeader("Acess-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");

    // Resposta da requisão em json 
    response.json(db);
}