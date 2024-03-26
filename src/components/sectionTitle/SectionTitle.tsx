import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const SectionTitle = styled.h2`
    position: relative;    
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 5px;
    text-align: center;
    margin-bottom: 90px;
    
    &:before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }
    
   

`

