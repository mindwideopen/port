import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import Menu from "../menu/Menu";


export const DesktopMenu:React.FC<{menuItems:Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
    @media ${theme.media.tablet}
    {
        display: none;
    }
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    
`

