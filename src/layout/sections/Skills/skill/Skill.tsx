import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
    skillTitle?: string,
    skillText?:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <SkillStyled>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>


                <SkillTitle>{props.skillTitle}</SkillTitle>

                <SkillText>{props.skillText}</SkillText>
            </FlexWrapper>



        </SkillStyled>


    );
};

const SkillStyled = styled.div`
    
    width: 330px;
    flex-grow: 1;
    padding: 47px 20px 52px;
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
    

`

const SkillTitle = styled.h2`
    margin: 70px 0 15px;    
    text-align: left;
    text-transform: uppercase;
    
    

`

const SkillText = styled.p`
    line-height: 21px;
    text-align: center;
    
  

`

export const IconWrapper = styled.div`
position: relative;
    
    &:before {
        position: absolute;
        content: '';
        width: 80px;
        height: 80px;       
        background: rgba(255, 255, 255, 0.1);
        top: 50%;
        left: 50%;
        transform:  rotate(45deg) translateX(-50%) translateY(-50%);
        transform-origin: 0 0;
        
        
        
        
        
        
    }


`