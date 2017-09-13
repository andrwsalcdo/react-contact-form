import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

//import components
import Form from '../../components/Form'
import Label from '../../components/Label'
import StyledButton from '../../components/Button'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;



const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Company</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>Message</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm