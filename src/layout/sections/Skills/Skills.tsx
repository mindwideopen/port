import React from 'react';
import {S} from './skill/Skill_Styles'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container/Container";
import { motion } from "framer-motion";
import {fadeInUp} from "react-awesome-reveal/dist/animations/fading_entrances";
import {Slide} from "react-awesome-reveal";

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




    <S.SkillsStyled id={'technologies'}>

            <Container>
                <SectionTitle>My Skills</SectionTitle>

                 <FlexWrapper wrap="wrap" justify="space-between">
                     {skillData.map((item, index) => (
                         <Slide>
                             <Skill key={index} {...item} />
                         </Slide>




                     ))}
                 </FlexWrapper>




            </Container>




        </S.SkillsStyled>
    );
};

