import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    
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