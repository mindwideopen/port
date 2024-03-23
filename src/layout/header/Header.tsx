import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: antiquewhite;
  padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
  

`

