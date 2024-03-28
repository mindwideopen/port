import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">

                                {item}

                                <Mask>
                                    <span>{item}</span>
                                </Mask>

                                <Mask>
                                    <span>{item}</span>
                                </Mask>

                            </Link>

                        </ListItem>
                    })

                    }
                </ul>
            </MobileMenuPopUp>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block}   

`

const Link = styled.a`

    font-family: 'Josifin Sans', 'sans-serif';
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: transparent;

`

const Mask = styled.span`

    display: inline-block;
    color: ${theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    
    
    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%)
        }
    }
    

`

const ListItem = styled.li`
    position: relative;
    
    
    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
        
    }
    
    &:hover {
        
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            color: ${theme.colors.font};
            
            transform:  skew( 30deg) ;
            
            & + ${Mask} {
                
                transform:  skew(-30deg);
            }
        }
        
        
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