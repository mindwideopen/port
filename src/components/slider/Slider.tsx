import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <SliderStyled>

            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet provident quis quod repellendus sint velit. Corporis itaque modi tempore!</Text>
                    <Name>Nik Lit</Name>

                </Slide>

            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>

        </SliderStyled>
    );
};

const SliderStyled = styled.div`
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
    

`

const Name = styled.span`
    

`

const Pagination = styled.div`

span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 10px;
    background-color: red;
}
`