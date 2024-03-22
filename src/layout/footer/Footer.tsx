import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";


export const Footer = () => {
    return (
        <FooterStyled>


            <Name>Nikolay</Name>

            <SocialIconList>

                <SocialItem>
                    <SocialIconLink>
                        <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'}/>
                    </SocialIconLink>
                </SocialItem>

                <SocialItem>
                    <SocialIconLink>
                        <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'vk'}/>
                    </SocialIconLink>
                </SocialItem>

                <SocialItem>
                    <SocialIconLink>
                        <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'linkedIn'}/>
                    </SocialIconLink>
                </SocialItem>

                <SocialItem>
                    <SocialIconLink>
                        <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'}/>
                    </SocialIconLink>
                </SocialItem>

            </SocialIconList>
            <Copyright>© 2023 Nikolay Litvinov, All Rights Reserved.</Copyright>

        </FooterStyled>
    );
};

const FooterStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;


`

const Name = styled.span`


`

const SocialIconList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;


`

const SocialIconLink = styled.ul`


`
const SocialItem = styled.li`


`

const Copyright = styled.small`


`

