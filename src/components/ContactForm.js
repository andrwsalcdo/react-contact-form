import React from 'react';


const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Company</label>
            <input type="text" name="company" />
            <label>Email Address</label>
            <input type="email" name="email" />
            <label>Phone Number</label>
            <input type="text" name="phone" />
            <label>Message</label>
            <textarea name="message" rows="5"></textarea>
            <button>Submit</button>
        </form>
    </div>
)

export default ContactForm; 