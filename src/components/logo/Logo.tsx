import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll} from "react-scroll";
import styled from "styled-components";


export const Logo: React.FC = () => {
    return (
        <LogoStyled onClick={ () => {animateScroll.scrollToTop()}}>
            <Icon iconId={"logo"}  width={"100"} height={"100"} viewBox={"0 0 550 500"} />
        </LogoStyled>

    );
};

const LogoStyled = styled.a`
   
       
`