import React from 'react';
import photo from '../../../assets/images/photo1704753319.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container/Container";
import {S} from "./Main_styles"


export const Main: React.FC = () => {
    return (
        <S.MainStyled>
            <Container>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>

                    <div>
                        <S.Greet>Hi There</S.Greet>
                        <S.Name>I am <span>Nikolay Litvinov</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Фотка"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>

        </S.MainStyled>


    );
};


