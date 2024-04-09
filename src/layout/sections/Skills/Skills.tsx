import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container/Container";

export const Skills = () => {
    return (
        <SkillsStyled>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>

                    <Skill iconId={'codeSvg'}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>

                    <Skill iconId={'css'}
                           skillTitle={'css'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>

                    <Skill iconId={'react'}
                           skillTitle={'react'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>

                    <Skill iconId={'typescript'}
                           skillTitle={'typeScript'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>

                    <Skill iconId={'styled Components'}
                           skillTitle={'styledComponents'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>



                    <Skill iconId={'figma'}
                           skillTitle={'web design'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'}/>

                </FlexWrapper>
            </Container>


        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`

`