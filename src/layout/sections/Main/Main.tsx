import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo1704753319.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>

                    <div>
                        <Greet>Hi There</Greet>
                        <Name>I am <span>Nikolay Litvinov</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Фотка"/>
                    </PhotoWrapper>
                </FlexWrapper>s
            </Container>

        </MainStyled>


    );
};

const Photo = styled.img`

    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 40px;
    
    @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
}

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
    
`

const Name = styled.h2`
    ${font ({family: 'Josefin Sans, sans-serif', weight:700, Fmax:50, Fmin: 36})}
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 50px;
    //font-weight: 700;
    margin:  10px 0 ;
    letter-spacing: 0.05em;
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
        
    }
    
    
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
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
    ${font ({family: 'Poppins, sans-serif', Fmax:27, Fmin: 20})}
   
    
`
const PhotoWrapper =  styled.div`
    position: relative;
    z-index: 0;
    @media ${theme.media.mobile} {
        margin-top: 45px;


    }
    
    &::before {
        position: absolute;
        content: '';
        height: 470px;
        width: 360px;
        border:  5px solid ${theme.colors.accent};
        top: -24px;
        left: 24px;
        z-index: -1;
        
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
            
            
        }
    }
    
`
