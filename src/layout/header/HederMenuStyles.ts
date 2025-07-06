import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";
import {font} from "../../styles/Common";


//Menu


const Mask = styled.span`

    display: inline-block;
    color: ${theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    
    
    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%)
        }
    }   

`
const NavLink = styled(Link)`

    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: black;
    cursor: pointer;
    transition: all .3s ease-in-out;
    // &::before {
    //     content: '';
    //     display: inline-block;
    //     height: 3px;
    //     background-color: ${theme.colors.accent};
    //     position: absolute;
    //     top: 50%;
    //     left: -10px;
    //     right: -10px;
    //     z-index: 1;
    //     transform: scale(0);
    //     transition: ${theme.animations.transition};
    //
    // }

    &::before {
        transition: all .2s ease-in-out;
        position: absolute;
        content: '';
        width: 100%;
        height: 10px;
        background-color: #003366;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: -1;

    }
    &:hover::before {
        width: 100%;
        height: 80%;
        border-radius: 10px;
            }

    &:hover {
       color: white;
        padding: 30px;
    }

`
const MenuItem = styled.li`
    position: relative;  
    
`


//Mobile Menu

const MobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }   

`

const BurgerButton = styled.button<{isOpen: boolean}>`

    z-index: 999999;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;

    span {
        display: block;
        position: absolute;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};        
        left: 40px;
        bottom: 50px;
        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color:rgba(255, 255, 255, 0);
        `}


    }

    span:before {
        display: block;
        content: '';
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(-10px);

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
        `}

    }

    span:after {
        display: block;
        content: '';
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(10px);
 
        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

    }
`

// const MobileMenuPopUp = styled.div<{isOpen: boolean}>`
//
//     display: none;
//     position: fixed;
//     background-color: ${theme.colors.primaryBg};
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: 99999;
//
//     ${props => props.isOpen && css <{isOpen: boolean}>`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//
//     `}
//
//     ul {
//         display: flex;
//         gap: 20px;
//         justify-content: center;
//         flex-direction: column;
//         align-items: center;
//
//
//
//         }
//     }
//
// `

 const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.primaryBg};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.5s ease, opacity 0.5s ease;

    ${({ isOpen }) =>
            isOpen &&
            css`
                transform: translateX(0);
                opacity: 1;
                pointer-events: auto;
            `}

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;


//DesktopMenu

const DesktopMenu = styled.nav`
    
    
    ${font ({family: 'JetBrains Mono, sans-serif', weight:700, Fmax:50, Fmin: 36})}
    // @media ${theme.media.tablet}
    // {
    //     display: none;
    }
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopUp,
    BurgerButton,
    DesktopMenu
}