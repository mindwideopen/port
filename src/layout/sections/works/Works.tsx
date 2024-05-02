import React, {useState} from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/social_network.webp"
import timer from "../../../assets/images/Rectangle-14.png"
import {Container} from "../../../components/Container/Container";
import {S} from './work/WorkStyles'


const worksData = [
    {
        workTitle: 'Social Network',
        workText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa',

    },
    {
        workTitle: 'Timer', 
        workText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim',
        src: timer,
        type: 'react',

    }

]

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'Landing Page',
        status: 'landing page'
    },
    {
        title: 'SPA',
        status: 'spa'
    },

]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    let filteredWorks = worksData

    if (currentFilterStatus === 'landing page') {
        filteredWorks = worksData.filter(item => item.type === 'landing page')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(item => item.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(item => item.type === 'spa')
    }

    function changeFilterStatus (value: 'all' | 'landing page' | 'react' | 'spa' ) {

            setCurrentFilterStatus (value)
    }


    return (
        <S.WorksStyled id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {filteredWorks.map((item, index) =>
                        <Work workTitle={item.workTitle} key={index}
                              workText={item.workText}
                              src={item.src}/>)
                    }


                </FlexWrapper>
            </Container>


        </S.WorksStyled>
    );
};



