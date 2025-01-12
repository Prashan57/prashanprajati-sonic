import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {EmailVariables} from '../constants/constant'

  //Format to sendForm :   YOUR_SERVICE_ID:"",YOUR_TEMPLATE_ID:"",YOUR_PUBLIC_KEY:""

export const CustomEmailJS = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EmailVariables.YOUR_SERVICE_ID, EmailVariables.YOUR_TEMPLATE_ID, form.current, {
        publicKey: EmailVariables.YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};