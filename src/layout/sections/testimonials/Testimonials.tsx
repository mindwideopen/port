import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <SectionTitle>Testimonisals</SectionTitle>

            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={'quote'}/>
                <Slider/>
            </FlexWrapper>


        </TestimonialsStyled>
    );
};


const TestimonialsStyled=styled.section`
height: 50vh;
    background-color: cornflowerblue;
`
