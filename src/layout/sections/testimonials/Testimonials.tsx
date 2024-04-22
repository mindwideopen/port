import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Testimonials_styles'
import {Container} from "../../../components/Container/Container";
import {IconWrapper} from "../Skills/skill/Skill_Styles";



export const Testimonials = () => {
    return (

        <S.TestimonialsStyled>
            <Container>
                <SectionTitle>Testimony</SectionTitle>

                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>



        </S.TestimonialsStyled>
    );
};



