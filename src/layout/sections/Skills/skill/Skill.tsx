import React from 'react';
import {Icon} from "../../../../components/icon/Icon";

import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Skill_Styles'
type SkillPropsType = {
    iconId: string,
    skillTitle?: string,
    skillText?:string
}


export const Skill = (props:SkillPropsType) => {
    return (
        <S.SkillStyled>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>


                <S.SkillTitle>{props.skillTitle}</S.SkillTitle>

                <S.SkillText>{props.skillText}</S.SkillText>
            </FlexWrapper>



        </S.SkillStyled>


    );
};

