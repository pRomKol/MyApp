
import React from 'react';
import './wrapper.module.css';
import styled from "styled-components";
import img from './photo-1516417156595-3ca5df62a3a4.avif'
function App() {
  return (
      <Wrapper>
        <Card>
            <ImageWrapper>
                <CoverImg src={img}/>
            </ImageWrapper>
            <CardTitle>
                Headline
            </CardTitle>
            <CardMainText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa
            </CardMainText>
            <Buttons>
                <Button>

                </Button>
                <Button>

                </Button>
            </Buttons>
        </Card>
      </Wrapper>


  );
}

const CardTitle = styled.div`
    margin: 0px 0px 0px 20px;
    font-weight: 700;
    font-size: 30px;
    
`
const CardMainText = styled.div`
  color: rgba(0, 0, 0, 0.35);
  font-weight: 600;
  margin: 10px 20px;
  font-size: 20px;
`
const ImageWrapper = styled.div `
`
const CoverImg = styled.img`
    width: 510px;
    border-radius: 13px;
    margin: 20px;
`
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
const Buttons = styled.div`
display: flex`
const Button = styled.button`
`

export default App;
