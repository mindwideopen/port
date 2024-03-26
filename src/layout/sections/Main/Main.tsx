import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo1704753319.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container/Container";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>

                    <div>
                        <Greet>Hi There</Greet>
                        <Name>I am <span>Nikolay Litvinov</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Фотка"/>
                    </PhotoWrapper>



                </FlexWrapper>
            </Container>

        </MainStyled>


    );
};

const Photo = styled.img`

    width: 350px;
    height: 430px;
    object-fit: cover

`

const MainStyled = styled.section`
    background-color: burlywood;
    height: 100vh;
    display: flex;

`

const Greet = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    
    letter-spacing: 0;
    text-align: left;
`

const Name = styled.h2`
    
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    margin:  10px 0 10px 0;
    letter-spacing: 0.05em;
    text-align: left;  
    
    
    span {
        position: relative;
        z-index: 0;
    }
    span:before {
        
        position: absolute;        
        content:'';
        display: inline-block;
        width: 100%;
        height: 20px;
        background: ${theme.colors.accent};
        bottom:0;
        z-index: -1;
        
        
    }
`

const MainTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 27px;
    font-weight: 400;    
    letter-spacing: 0;
    text-align: left;
`
const PhotoWrapper =  styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        position: absolute;
        content: '';
        height: 470px;
        width: 360px;
        border:  5px solid ${theme.colors.accent};
        top: -24px;
        left: 24px;
        z-index: -1;
    }
    
`
