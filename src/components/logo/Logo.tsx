import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll} from "react-scroll";
import styled from "styled-components";


export const Logo: React.FC = () => {
    return (
        <LogoStyled onClick={ () => {animateScroll.scrollToTop()}}>
            <Icon iconId={'codeSvg'} />
        </LogoStyled>

    );
};

const LogoStyled = styled.a`
   
   
   
    
`