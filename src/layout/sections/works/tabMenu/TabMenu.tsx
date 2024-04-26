import React from 'react';
import styled from "styled-components";

import {Link} from "../../../../components/Link";

type TabStatusType = 'all' | 'landing page' | 'react' | 'spa'

type TabMenuPropsType = {
    tabItems: Array<{title: string, status: TabStatusType}>,
    changeFilterStatus: (value:TabStatusType) => void
}


export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabItems.map((item, index) => {
                    return(
                    (<ListItem  key={index}>

                        <Link as={'button'}  onClick={() => {props.changeFilterStatus(item.status)}}>
                            {item.title}
                        </Link>

                    </ListItem>)
                    )
                })

                }
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 45px;
    }

`

const ListItem = styled.li`
    position: relative;
    z-index: 0;

`

