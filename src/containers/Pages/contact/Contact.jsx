import React, { useRef } from 'react';
import map from '../../../assets/map.png';
import contactBanner from '../../../assets/contact-banner.jpeg';
import { HomeCard } from '../../../components/HomeCard/HomeCard';
import { toast, ToastContainer } from 'react-toast';

const Contact = () => {
  const nameInputRef = useRef('');
  const emailInputRef = useRef('');
  const msgInputRef = useRef('');
  return (
    <div className='contact'>
      <img src={contactBanner} alt='contact-banner' />
      <div className='contact__content-wrapper'>
        <HomeCard
          image={map}
          text={[
            'Location',
            '09333333332',
            'info@mail.com',
            'https://myweb.com',
          ]}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast(
              `Dear ${nameInputRef.current.value}, thanks for contacting us!`,
            );
            nameInputRef.current.value = '';
            msgInputRef.current.value = '';
            emailInputRef.current.value = '';
          }}
        >
          <h3>Send us a message</h3>
          <span>
            <label>Name:</label>
            <input ref={nameInputRef} />
          </span>
          <span>
            <label>Email:</label>
            <input ref={emailInputRef} />
          </span>
          <span>
            <label>Message:</label>
            <textarea ref={msgInputRef} />
          </span>
          <button type='submit'>Send message</button>
        </form>
      </div>
      <ToastContainer position='bottom-right' delay={5000} />
    </div>
  );
};

export default Contact;
