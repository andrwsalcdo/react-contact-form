import React, { Component } from 'react';
//import all child components
import Container from '../components/Container'
import Title from '../components/Title'
import CompanyInfo from './CompanyInfo'
import ContactForm from './ContactForm'



class Main extends Component {
    render () {
        return (
            <Container>
                <Title text="Title" />
                <Container wrapper>
                    <CompanyInfo />
                    <ContactForm />
                </Container>
            </Container>
        )
    }
}

export default Main; 