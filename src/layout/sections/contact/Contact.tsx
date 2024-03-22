import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";

export const Contact = () => {
    return (
        <ContactStyled>
            <SectionTitle>Contacts</SectionTitle>
            <FormStyled>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Name'} as={'textarea'}/>
                <Button type={'submit'}>Send Message</Button>

            </FormStyled>


        </ContactStyled>
    );
};

const ContactStyled = styled.section`
    min-height: 50vh;
    background-color: darkseagreen;
    

`

const FormStyled = styled.form`
    max-width:500px ;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 0 auto;


`

const Field = styled.input`

`