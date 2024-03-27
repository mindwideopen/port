import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";


type WorksPropsType = {
    workTitle: string,
    workText: string,
    src: string
}
export const Work = (props: WorksPropsType) => {
    return (
        <WorkStyled>
            <Image src={props.src} alt={props.workTitle}/>
            <Description>
                <WorkTitle>{props.workTitle}</WorkTitle>
                <WorkText>{props.workText}</WorkText>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>

        </WorkStyled>
    );
};

const WorkStyled = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    ${Link} {
        padding:  0;    
        & + ${Link} {
            margin-left: 20px;
        }
        
    }
    ${Link}:before {
        bottom: -3px;
        
    }
    
   // ${Link} +  ${Link} {
   //   
   // }
    
    

`

const Image= styled.img`
  width: 100%;
    object-fit: cover;

    height: 260px;
`
const WorkTitle = styled.h3`

`


const WorkText = styled.p`
    margin: 14px 0 10px ;

`
const Description = styled.div`
padding: 25px 20px;
`
