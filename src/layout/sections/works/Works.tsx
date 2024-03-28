import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/social_network.webp"
import timer from "../../../assets/images/Rectangle-14.png"
import {Container} from "../../../components/Container/Container";



const worksItems = ['All', 'landing page', 'React', 'spa']
export const Works = () => {
    return (
        <WorksStyled>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work workTitle={'Social Network'} workText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} src={socialImg}/>
                    <Work workTitle={'Timer'} workText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} src={timer}/>

                </FlexWrapper>
            </Container>



        </WorksStyled>
    );
};

const WorksStyled = styled.section`
    
    

`