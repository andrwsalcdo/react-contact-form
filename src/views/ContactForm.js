import React from 'react';

//import components
import Form from '../components/Form'
import Label from '../components/Label'
import StyledButton from '../components/Button'


const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <Form>
            <Label>Name</Label>
            <input type="text" name="name" />
            <Label>Company</Label>
            <input type="text" name="company" />
            <Label>Email Address</Label>
            <input type="email" name="email" />
            <Label>Phone Number</Label>
            <input type="text" name="phone" />
            <Label>Message</Label>
            <textarea name="message" rows="5"></textarea>
            <StyledButton>Submit</StyledButton>
        </Form>
    </div>
)

export default ContactForm; 