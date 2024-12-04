import React from 'react';
import FloatingButtons from './FloatingButtons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './HomePage.css';

const HomePage = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const username = "Shanks";

  return (
    <div className="homepage">
      <div className="app-title">
        <span>I</span>
        <span>n</span>
        <span>s</span>
        <span>t</span>
        <span>a</span>
        <span>L</span>
        <span>a</span>
        <span>b</span>
        <span>e</span>
        <span>l</span>
      </div>
      <div className="content">
        <div className="gif-container">
          <img 
            src="/src/assets/gifgit.gif" 
            alt="Animation" 
            className="circular-gif"
          />
        </div>
        <h1 className="animated-text">
          <span className="greeting">{getGreeting()},</span>
          <span className="username">{username}</span>
        </h1>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default HomePage;
