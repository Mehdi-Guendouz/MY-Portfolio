import React, { useState, useRef } from 'react';
import "./form.scss";
import emailjs from 'emailjs-com';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_3m3h17h', 'template_sjrduof', form.current, 'CQ0kvwObB2EV7aG6x')
          .then((result) => {
              console.log(result.text);
              setName("")
              setEmail("")
              setTitle("")
              setMessage("")
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} ref={form}>
                <div className="item">
                    <input type="text" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} name="name" />
                    <input type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} name="email" />
                </div>
                <div className="item">
                    <input type="text" placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} name="title" />
                </div>
                <div className="item">
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Form;
