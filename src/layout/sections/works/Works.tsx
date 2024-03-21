import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";


const worksItems = ['All', 'landing page', 'React', 'spa']
export const Works = () => {
    return (
        <WorksStyled>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>

            </FlexWrapper>


        </WorksStyled>
    );
};

const WorksStyled = styled.section`
    height: 100vh;
    background-color: coral;

`