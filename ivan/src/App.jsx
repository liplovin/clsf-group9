import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Nav';
import BG from './Components/BG/BG';
import AboutUs from './Components/AboutUs/AboutUs';
import AboutUs2 from './Components/AboutUS2/AboutUs2';
import Title from './Components/Title/Title';
import Newhere from './Components/Newhere/Newhere';
import Contact from './Components/Contact/Contact';
import ChatBot from 'react-simple-chatbot';
import Donation from './Components/Donation/Donation';
import { Carousel } from "./Components/Gallery/Components/Carousel";
import { slides } from "./Components/Gallery/data/carouselData.json";
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import './App.css';
// Custom avatars for the chatbot
import botAvatarImage from './Components/Images/CLSF.png'
import userAvatarImage from './Components/Images/chatbot-user.png';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [themeColor, setThemeColor] = useState('#8023c2'); // Default theme color
  const [userInput, setUserInput] = useState('');
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      // Change theme color based on scroll position
      if (position > 0) {
        setThemeColor('#212EA0');
      } else {
        setThemeColor('#8023c2');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowInitialMessage(true); // Reset initial message when opening the chatbot
  };

  const handleUserInput = (input) => {
    setShowInitialMessage(false); // Hide initial message after user input
    const keywords = [
      'about the church',
      'location',
      'service times',
      'services',
      'events',
      'prayer requests',
      'contact',
      'donation'
    ];

    const userInput = input.toLowerCase();

    if (keywords.some(keyword => userInput.includes(keyword))) {
      // Check if any keyword matches the user input
      // If yes, return the corresponding message ID
      switch (true) {
        case userInput.includes('about the church'):
          return 'about_church_message';
        case userInput.includes('location'):
          return 'location_message';
        case userInput.includes('service times'):
          return 'service_times_message';
        case userInput.includes('services'):
          return 'services_message';
        case userInput.includes('events'):
          return 'events_message';
        case userInput.includes('prayer requests'):
          return 'prayer_request_message';
        case userInput.includes('contact'):
          return 'contact_us_message';
        case userInput.includes('donation'):
          return 'donation_message';
        default:
          return 'unidentified_message';
      }
    } else {
      // If no keyword matches, return 'unidentified_message'
      return 'unidentified_message';
    }
  };

  return (
    <ThemeProvider theme={{ // Wrap your components with ThemeProvider and provide the theme
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: themeColor, // Use dynamic theme color for headerBgColor
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: themeColor, // Use dynamic theme color for botBubbleColor
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    }}>
      <div>
        <Navbar />
        <BG />
        <div className="container">
          <AboutUs />
          <AboutUs2 />
          <Title subTitle="New Here?" title="Get to Know Us" />
          <Newhere />
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Donation />
        </div>
        {/* ChatBot positioned at the bottom right */}
        <div className="chat-button-container">
          <button
            className="chat-button"
            onClick={toggleChatbot}
            style={{ backgroundColor: themeColor }} // Apply dynamic theme color
          >
            <img src="src\Components\Images\icons8-messaging-100.png" alt="Chat icon" className="chat-button-icon" />
          </button>
        </div>

        {isOpen && (
          <div className="chatbot-container">
            <ChatBot
              botAvatar={botAvatarImage}
              userAvatar={userAvatarImage}
              headerTitle={<h2 style={{ margin: 0, padding: '10px', color: 'white', backgroundColor: themeColor, fontSize:'20px'}}>Chat with Us!</h2>}
              steps={[
                {
                  id: 'initial_message',
                  message: showInitialMessage ? 'Please write your question or choose one of the following below' : '',
                  trigger: 'options_message'
                },
                {
                  id: 'options_message',
                  options: [
                    { value: 'about_church', label: 'About the Church', trigger: 'about_church_message' }, 
                    { value: 'location', label: 'Location', trigger: 'location_message' },
                    { value: 'service_times', label: 'Service Times', trigger: 'service_times_message' },
                    { value: 'services', label: 'Services', trigger: 'services_message' },
                    { value: 'events', label: 'Events', trigger: 'events_message' },
                    { value: 'prayer_request', label: 'Prayer Request', trigger: 'prayer_request_message' },
                    { value: 'contact_us', label: 'Contact Us', trigger: 'contact_us_message' },
                    { value: 'donation', label: 'Donation', trigger: 'donation_message' },
                  ], 
                  trigger: 'user_input', // Initially trigger user input
                  waitAction: true // Wait for user input
                },
                {
                  id: 'user_input',
                  user: true,
                  trigger: (value) => {
                    setUserInput(value);
                    return handleUserInput(value);
                  }
                },                
                {
                  id: 'about_church_message',
                  message: 'From its humble beginnings as a campus ministry in the 70’s, otherwise known as the Jesus People Movement, Christ, the Living Stone Fellowship blossomed into a nationwide ministry with more than 100 daughter churches throughout the Philippine archipelago.',
                  trigger: 'options_message'
                },
                {
                  id: 'location_message',
                  message: 'Christ, the Living Stone, Fellowships headquarters are located at Clsf Headquarters 453 Calbayog St, Mandaluyong Central Post Office, Bicol, 1550, Philippines.',
                  trigger: 'options_message'
                },
                {
                  id: 'service_times_message',
                  message: 'Welcome! Our service times at Christ, the Living Stone Fellowship are as follows:',
                  trigger: 'options_message'
                },
                {
                  id: 'services_message',
                  message: "Thank you for your interest in our services! At the moment, our chatbot doesn't have the specific details about our services. However, our friendly admin team is available to assist you promptly. Please feel free to message our Facebook page: 'Christ the Living Stone, Fellowship', and one of our team members will provide you with all the information you need. You can expect a swift response. If you have any other questions or need assistance with anything else, feel free to ask!",
                  trigger: 'options_message'
                },
                {
                  id: 'events_message',
                  message: "Thank you for your interest in our events! Currently, our chatbot doesn't have the latest information about upcoming events. However, you can easily find the most recent events posted on our Facebook page. We regularly update our events there, and you can even download the event details in PDF format. Simply visit our Facebook page to stay updated with our upcoming events.",
                  trigger: 'options_message'
                },
                {
                  id: 'prayer_request_message',
                  message: "Thank you for reaching out with your prayer request! We deeply value your prayer needs and would be honored to pray for you. To ensure your request receives the attention it deserves, we encourage you to send us a direct message (DM) on our Facebook page. Our dedicated team is committed to lifting your requests in prayer. Please don't hesitate to reach out to us, and rest assured that your prayer needs will be held in confidentiality and with care.",
                  trigger: 'options_message'
                },
                {
                  id: 'contact_us_message',
                  message: 'Heres our contact informations:',
                  trigger: 'contact_info'
                },
                {
                  id: 'contact_info',
                  component: (
                    <div className="contact-info">
                      <p>Office: +63 (2) 533-5171 / 533-5179</p>
                      <p>Fax: +63 (2) 533-0017</p>
                      <p>E-mail: webmaster@clsfchurch.org</p>
                    </div>
                  ),
                  trigger: 'options_message'
                },
                {
                  id: 'donation_message',
                  message: "Thank you for your willingness to support our church through donations! When you click on the Donation link, a modal will pop up where you can input your personal information, including your email address. Once completed, you'll receive further information regarding donations, including our Gcash account details, via email. Your generosity is greatly appreciated, and your support helps us continue our mission.",
                  trigger: 'options_message'
                },
                {
                  id: 'unidentified_message',
                  message: "I'm sorry, I couldn't understand your question. Feel free to ask anything else, or you can send us a direct message on our Facebook page for assistance!",
                  trigger: 'options_message'
                },
              ]}
              hideUserInput={false}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ChatButton;
