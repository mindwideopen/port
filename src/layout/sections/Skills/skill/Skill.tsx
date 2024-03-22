import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string,
    skillTitle?: string,
    skillText?:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <SkillStyled>

            <Icon iconId={props.iconId}/>

            <SkillTitle>{props.skillTitle}</SkillTitle>

            <SkillText>{props.skillText}</SkillText>

        </SkillStyled>


    );
};

const SkillStyled = styled.div`
    
    width: 30%;
    background-color: rgba(255,255,255,0.5) ;
    margin: 5px;

`

const SkillTitle = styled.h2`

`

const SkillText = styled.p`

`

