import React from 'react';
import styled from "styled-components";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((key, index) => {
                    return <li key={index}><a href="#">{key}</a></li>
                })

                }
            </ul>
        </StyledMenu>
    );
};

const StyledMenu=styled.nav`
    
    ul {
        display: flex;
        gap: 20px;
        
    }

`