import React from 'react';

import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./MobileMenu/MobileMenu";
import {S} from './Header_Styles'
import Headroom from 'react-headroom';


export const Header: React.FC = () => {


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        // <S.StyledHeader>
        //     <Headroom>
        //         <Container>
        //
        //             <FlexWrapper justify={'space-between'}>
        //
        //                 <Logo/>
        //
        //
        //                 {width < breakPoint ? <MobileMenu/>
        //                     : <DesktopMenu/>}
        //
        //             </FlexWrapper>
        //
        //
        //         </Container>
        //     </Headroom>
        //
        // </S.StyledHeader>
        <S.StyledHeader>
            <div className="relative z-50">
                <Headroom>
                    <div className="bg-white shadow-md">
                        <Container>
                            <FlexWrapper justify="space-between">
                                <Logo />
                                {width >= breakPoint && (

                                    <DesktopMenu/>
                                )}

                            </FlexWrapper>
                        </Container>
                    </div>
                </Headroom>

                {/* Бургер всегда видим */}
                {width < breakPoint && (
                    <div className="absolute right-4 top-4">
                        <MobileMenu />
                    </div>
                )}
            </div>
        </S.StyledHeader>

    );
};



