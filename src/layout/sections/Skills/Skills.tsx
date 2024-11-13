import React from 'react';
import {S} from './skill/Skill_Styles'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container/Container";
import { Flip} from "react-awesome-reveal";

const skillData = [

    {
        iconId: 'codeSvg',
        skillTitle: 'html5',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'
    },

    {
        iconId: 'css',
        skillTitle: 'css',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    },

    {
        iconId: 'react',
        skillTitle: 'react',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    },

    {
        iconId: 'typescript',
        skillTitle: 'typeScript',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    },

    {
        iconId: 'styledComponents',
        skillTitle: 'styledComponents',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    },

    {
        iconId: 'figma',
        skillTitle: 'design',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    }

]


export const Skills = () => {
    return (
        <S.SkillsStyled id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <Flip cascade={true} damping={0.3}>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((item, index) =>
                        <Skill iconId={item.iconId} key={index}
                               skillTitle={item.skillTitle}
                               skillText={item.skillText}/>
                    )}







                </FlexWrapper>
                </Flip>
            </Container>


        </S.SkillsStyled>
    );
};

