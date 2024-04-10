import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import Menu from "../menu/Menu";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </MobileMenuPopUp>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }   

`



const BurgerButton = styled.button<{isOpen: boolean}>`

    z-index: 999999;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;

    span {
        display: block;

        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color:rgba(255, 255, 255, 0);
        `}


    }

    span:before {
        display: block;
        content: '';
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(-10px);

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
        `}

    }

    span:after {
        display: block;
        content: '';
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(10px);

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

    }
`

const MobileMenuPopUp = styled.div<{isOpen: boolean}>`
    display: none;
    position: fixed;
    background-color: rgba(31,32,32,0.9);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    ${props => props.isOpen && css <{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    `}

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
        
            
        }
    }

`