import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
       
        setErrorMessage('Your email is invalid.');
      } else {
       
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
  
  };
  
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <for htmlFor="name">Name:</for>
          <input
            type="text"
            onBlur={handleChange}
            name="name"
            defaultValue={name}
          />
        </div>
        <div>
          <for htmlFor="email">Email address:</for>
          <input type="email" onBlur={handleChange} name="email" defaultValue={email} />
        </div>
        <div>
          <for htmlFor="message">Message:</for>
          <textarea name="message" onBlur={handleChange} rows="5" defaultValue={message} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
