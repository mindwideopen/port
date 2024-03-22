import React from 'react';
import styled from "styled-components";


type WorksPropsType = {
    workTitle: string,
    workText: string,
    src: string
}
export const Work = (props: WorksPropsType) => {
    return (
        <WorkStyled>
            <Image src={props.src} alt={props.workTitle}/>
            <WorkTitle>{props.workTitle}</WorkTitle>
            <WorkText>{props.workText}</WorkText>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </WorkStyled>
    );
};

const WorkStyled = styled.div`
    max-width: 540px;
   

`

const Image= styled.img`
  width: 100%;
    object-fit: cover;

    height: 260px;
`
const WorkTitle = styled.h3`

`


const WorkText = styled.p`

`

const Link = styled.a`
`