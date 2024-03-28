import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../Skills/skill/Skill";

export const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <SectionTitle>Testimonisals</SectionTitle>

            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'quote'}/>
                </IconWrapper>

                <Slider/>
            </FlexWrapper>


        </TestimonialsStyled>
    );
};


const TestimonialsStyled=styled.section`
padding: 100px;
    background-color: cornflowerblue;
    
    ${IconWrapper} {
        margin-top: 30px;
    }
`
