import React from 'react';
import logo from './logo.svg';
import './wrapper.module.css';
import styled from "styled-components";

function App() {
  return (
      <Wrapper>
        <Card>
            i
        </Card>
      </Wrapper>


  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(63, 62, 62, 0.19);
  height: 100vh;
  width: 100vw;
`

const Card = styled.div `
width: 550px;
  height: 600px;
  background-color: #fff;
  border-radius: 13px;
`

export default App;
