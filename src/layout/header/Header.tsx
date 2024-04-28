import React from 'react';

import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./MobileMenu/MobileMenu";
import {S} from './Header_Styles'


const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
export const Header: React.FC = () => {


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);




    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    {width < breakPoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items}/>}

                </FlexWrapper>

            </Container>
        </S.StyledHeader>
    );
};



