import React, {useState} from 'react';
import Menu from "../menu/Menu";
import {S} from '../HederMenuStyles'

export const MobileMenu: React.FC <{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {


    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const burgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={burgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopUp>

        </S.MobileMenu>
    );
};

