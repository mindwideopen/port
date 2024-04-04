import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <ContactStyled>
            <SectionTitle>Contacts</SectionTitle>
            <Container>
                <FormStyled>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Name'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>

                </FormStyled>
            </Container>



        </ContactStyled>
    );
};

const ContactStyled = styled.section`
    ${SectionTitle} {
        @media ${theme.media.mobile} {
            margin-bottom: 74px;
        }
    }
    
    

`

const FormStyled = styled.form`
    width: 100%;
    max-width:500px ;    
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 0 auto;


`

const Field = styled.input`
    width: 100%;
    padding: 7px 15px  ;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    
    color: ${theme.colors.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;    
    text-align: left;   
    letter-spacing:  0.05em;
    
    &:focus-visible {
        outline: 3px solid ${theme.colors.borderColor};
        
    }
    
    
    &:nth-child(3) {
        resize: none;
        height: 155px;
        
    }

`