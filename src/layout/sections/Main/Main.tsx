import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/SAD_photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {isMainThread} from "node:worker_threads";


export const Main = () => {
    return (
        <MainStyled>
            <FlexWrapper justify={'space-around'} align={'center'} >

                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <h1>A Web Developer.</h1>
                </div>

                <Photo src={photo} alt="Фотка"/>

            </FlexWrapper>
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
`

