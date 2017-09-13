import React from 'react';

//import components
import Form from '../components/Form'
import Label from '../components/Label'
import StyledButton from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'



const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <Form>
            <Label>Name</Label>
            <Input type="text" name="name" />
            <Label>Company</Label>
            <Input type="text" name="company" />
            <Label>Email Address</Label>
            <Input type="email" name="email" />
            <Label>Phone Number</Label>
            <Input type="text" name="phone" />
            <Label>Message</Label>
            <Textarea name="message" rows="5"></Textarea>
            <StyledButton>Submit</StyledButton>
        </Form>
    </div>
)

export default ContactForm; 