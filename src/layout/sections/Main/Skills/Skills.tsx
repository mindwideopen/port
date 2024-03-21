import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
    return (
        <SkillsStyled>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'} >
                <Skill iconId={'codeSvg'} skillTitle={'html'} skillText={'Lorem ipsum dolor sit amet.'}/>
                <Skill iconId={'css'} skillTitle={'css'} skillText={'Lorem ipsum dolor sit amet.'}/>
                <Skill iconId={'react'} skillTitle={'react'} skillText={'Lorem ipsum dolor sit amet.'}/>
                <Skill iconId={'styledComponents'} skillTitle={'styledComponents'} skillText={'Lorem ipsum dolor sit amet.'}/>
                <Skill iconId={'typescript'} skillTitle={'typeScript'} skillText={'Lorem ipsum dolor sit amet.'}/>
                <Skill iconId={'figma'} skillTitle={'figma'} skillText={'Lorem ipsum dolor sit amet.'}/>


            </FlexWrapper>

        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`
background-color: aqua;
min-height: 100vh;
`