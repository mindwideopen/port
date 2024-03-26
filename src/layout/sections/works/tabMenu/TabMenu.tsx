import React from 'react';
import styled from "styled-components";

import {Link} from "../../../../components/Link";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((key, index) => {
                    return <ListItem key={index}><Link href="#">{key}</Link></ListItem>
                })

                }
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu=styled.nav`
    
    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;        
    }

`

const ListItem = styled.li`
    position: relative;
    z-index: 0;

`

