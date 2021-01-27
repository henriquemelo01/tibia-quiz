import styled from "styled-components";


// Criando novo component usando styled-components

// OBS: (theme) => the.clors.primary recebe o componente "instanciado". A call back acessa as keys do json

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input`
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

Widget.Button = styled.button`
  margin: 0.5rem 0 0.5rem 0;
  width: 100%;
  height: 32px;
  border: #ede7f6 solid 1px;
  background: #979797;
  border-radius: 0.25rem;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
  color: #FFFFFF;
  opacity: .85;
  &:hover,
    &:focus{
    opacity: 1;
  }

`

export default Widget;