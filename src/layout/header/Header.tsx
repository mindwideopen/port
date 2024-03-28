import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./MobileMenu/MobileMenu";


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #1F1F20;
  padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: ${theme.colors.accent};
    font-family:' Josefin Sans',sans-serif;
    z-index: 99999;
    
    
   
    
    `

