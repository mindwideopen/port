
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
      
    
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;
    
    &::before {
        
        position: absolute;
        
        display: inline-block;
        content: '';
        left: 0;
        right: 0;        
        background-color: ${theme.colors.accent};
        bottom: -4px;
        z-index: -1;
    }
    &:hover {
        &::before{
            height: 10px;
        }
        
    }
    
    
`