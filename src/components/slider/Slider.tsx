import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <SliderStyled>

            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@Nik Lit</Name>

                </Slide>

            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}> </span>
                <span></span>
            </Pagination>

        </SliderStyled>
    );
};

const SliderStyled = styled.div`
    margin-top: 74px;
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Slide = styled.div`
    text-align: center;

`

const Text = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0;
    text-align: center;
    

`

const Name = styled.span`
    display: inline-block;
    margin-top: 15px;
    margin-bottom: 35px;
    color: ${theme.colors.font};
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    

`

const Pagination = styled.div`

span {
    display: inline-block;
    width: 7px;
    height: 7px;
    
    background-color:rgba(255,255,255,0.5);
    border-radius: 20px;
    & + span {
        margin-left: 5px;
        
    }
    &.active {
        background-color: ${theme.colors.accent};
        width: 20px
    }
}
    
`