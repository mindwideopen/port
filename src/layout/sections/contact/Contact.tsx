import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container/Container";
import {S} from './contact_Styles'

export const Contact = () => {
    return (
        <S.ContactStyled>
            <SectionTitle>Contact</SectionTitle>
            <Container>
                <S.FormStyled>
                    <S.Field placeholder={'Name'}/>
                    <S.Field placeholder={'Name'}/>
                    <S.Field placeholder={'Name'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>

                </S.FormStyled>
            </Container>



        </S.ContactStyled>
    );
};

