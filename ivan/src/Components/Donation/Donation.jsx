import React, { useState, useRef } from 'react';
import './Donation.css';
import emailjs from '@emailjs/browser';
import { Carousel } from './Components/Carousel';
import  slides  from './data/carouselData.json';


const Donation = () => {
  const [showModal, setShowModal] = useState(false);
  const [user_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3b0t7q3', 'template_hugkk0t', form.current, {
        publicKey: 'IGofPUafqxiBcwveO',
        user_name,
        email,
        phone,
        donationAmount,
        message,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Optionally, you can close the modal or show a success message here
          setShowModal(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Optionally, you can show an error message to the user here
        },
      );
  };

  return (
    <div className="header_hero" id="home">
      <div className="Donationcontainer">
        <div className="row">
          <div className="col-lg-6 col-10 mx-auto">
            <div className="header_hero__text">
              <h2 className="donateHeader">
                <span className="spancolor">DONATE</span> FOR A CAUSE !
              </h2>
              <p className="pcontent">
                "Your generous contributions empower us to advance our mission of community service 
                and the promotion of faith, hope, and love. With your invaluable support, we extend 
                a helping hand to those facing adversity, organize engaging community gatherings, 
                and provide vital spiritual guidance to individuals and families alike. Moreover, 
                your continued generosity enables us to explore innovative avenues for outreach and 
                expand our reach, touching even more lives with compassion and support. Every donation, 
                regardless of its size, creates a profound ripple effect, positively transforming the 
                lives of many and building a brighter future for our community, grounded in solidarity 
                and upliftment."
              </p>
              <button
                className="button"
                onClick={() => setShowModal(true)}>
                Donate
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-10 mx-auto">
           {/* Replace the figure element with the Carousel component */}
           <Carousel data={slides.slides} /> {/* Pass the imported data as prop */}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form ref={form} onSubmit={sendEmail}>
              <h2>Enter Your Information</h2>
              <p className="message">Once you submit the form, please check your email for further instructions regarding the donation.</p>
              <input
                type="text"
                placeholder="Full Name"
                name='user_name'
                value={user_name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                name='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Donation Amount"
                name='donationAmount'
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
              />
              <textarea
                placeholder="Message (optional)"
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
