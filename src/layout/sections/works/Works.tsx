import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
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
        src: socialImg

    },
    {
        workTitle: 'Timer',
        workText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim',
        src: timer

    }

]
const worksItems = ['All', 'landing page', 'React', 'spa']
export const Works= () => {
    return (
        <S.WorksStyled>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {worksData.map((item, index) =>
                        <Work workTitle={item.workTitle} key={index}
                              workText={item.workText}
                              src={item.src}/>)
                    }


                </FlexWrapper>
            </Container>


        </S.WorksStyled>
    );
};



