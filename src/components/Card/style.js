import styled from "styled-components";
export const Container = styled.div`
  display:flex;
  flex-direction: column;
  text-align:center;
  height: 100%;
  width: 40%;
  border:2px solid green;
  dislay:flex;
  margin:6rem auto;
  text-aligtn:center;
  border-radius:15px;
section{
  align-self:center;
}
section>tr>td{
  width:20rem;
  height:2rem;
  align-items:center;
  background-color:grey;
  color:white;
  display:content;
  border:2px solid blue;
  border-radius:5px;
}
    >div{
  border-radius:0 0 15px  15px;
    display:flex;
    padding:4rem;
    background: #ccc;
  }
  >div>input{
    width:70%;
  }
    >div>Button{
      color:green;
      width:30%;
  }
`
