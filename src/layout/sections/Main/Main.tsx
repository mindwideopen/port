import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo1704753319.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container/Container";



export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} >

                    <div>
                        <Greet>Hi There</Greet>
                        <Name>I am Nikolay Litvinov</Name>
                        <h1>A Web Developer.</h1>
                    </div>

                    <Photo src={photo} alt="Фотка"/>

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
     display: flex;
    
    height: 100vh;
`

const Greet = styled.span`
`
const Name = styled.span`
`
