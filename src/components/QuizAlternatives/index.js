import React from "react";
import styled from "styled-components";
import db from "../../../db.json";
import Widget from "../Widget/index.js"

const alternatives = db.questions.map((question,i) => question.alternatives.map((alternative) => <Widget.Button>{alternative}</Widget.Button>));


// Criando Component usando ES6 class
class Alternatives extends React.Component {
    render() {
        return (
            <div>
                {/* Quando passo um array de components como parâmetro, o react dom renderiza um por um */}
                {alternatives}
            </div>
        )
    }
}

export default Alternatives;