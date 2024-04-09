import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/button/Button";


type WorksPropsType = {
    workTitle: string,
    workText: string,
    src: string
}
export const Work = (props: WorksPropsType) => {
    return (
        <WorkStyled>
            <ImageWrapper>
                <Image src={props.src} alt={props.workTitle}/>
                <Button>BUTTON</Button>
            </ImageWrapper>

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
    
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 0;

        & + ${Link} {
            margin-left: 20px;
        }

    }

    ${Link}:before {
        bottom: -3px;

    }

   @media ${theme.media.desktop} {
       max-width: 540px;
   }



`

const Image = styled.img`
    width: 100%;
    object-fit: cover;

    height: 260px;
`
const WorkTitle = styled.h3`

`


const WorkText = styled.p`
    margin: 17px 0 18px;

`
const Description = styled.div`
    
    
    padding: 25px 20px;
`


const ImageWrapper = styled.div`

    position: relative;
    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    
    &:hover{
        ${Button} {
            opacity: 1;
            &:before {
                width: 100%;
                height: 100%;
            }
        }        
        
        &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            backdrop-filter: blur(4px);
            background: rgba(0,0,0,0.3);
        }
    }

   @media ${theme.media.tablet} {
       &:before {
           content: '';
           position: absolute;
           top: 0;
           bottom: 0;
           left: 0;
           right: 0;
           backdrop-filter: blur(4px);
           background: rgba(0,0,0,0.3);
       }
       ${Button} {
           opacity: 1;
           &:before {
               width: 100%;
               height: 100%;
           }
           
       }

   }
        
    

`