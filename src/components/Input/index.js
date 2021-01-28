import React from "react";
import styled from "styled-components";

// Importando lib que permite definirmos a tipagem dos dados (EX: Uma input só pode receber strings)
import PropTypes from "prop-types";

const InputBase = styled.input`
  margin: 1px 1px 0.5rem 1px;
  /* padding: 0.5rem 4rem; */


  background: none;
  border: #6200EE solid 1px;
  border-radius: 3.5px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: white;
  text-align: left;
  text-indent: 8px;
`

// Componente : props {atributtes: ... , children: }, o props é um objeto que é passado como parâmetro quando o JSX é lido na renderização 
export default function Input (props) {
    return (
        // O componente foi inserido dentro da div para separa-lo dos demais 
        <div>
            <InputBase placeholder = {props.placeholder} onChange = {props.onChange}/>
        </div>
    )
}

// Garante que todo que recebemos de props e o que os componetes estão esperando sejam dos tipos previstos (EX: Número, String..)
Input.defaultProps = {
    value: "",
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};