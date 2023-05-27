
import React from 'react';
import './AboutUs.css';
import image from './image/about1.jpeg';

const AboutUs = () => {
  return (
    <div className="page-container">
      <main className="content-container">
        <div className="about-us-container">
          <h1 className="about-heading">Welcome to "SpendSmart"</h1>
          <div className="image-container">
            <img  src={image} alt="About Us" className="about-image" />
          </div>
          <h2 className="sub-heading">Our Mission</h2>
          <p>
            At SpendSmart, our mission is to empower individuals and families to take control of their finances and achieve their financial goals. We understand that managing money can be challenging, but with the right tools and guidance, anyone can build a solid financial foundation.
          </p>
          <h2 className="sub-heading">Our Expert Team</h2>
          <p>
            Our team of financial experts brings a wealth of knowledge and experience in budgeting, personal finance, and money management. We are dedicated to providing you with the resources and tools you need to make informed financial decisions and succeed in your financial journey.
          </p>
          <h2 className="sub-heading">Features and Benefits</h2>
          <p>
            With SpendSmart, you can effortlessly track your income, expenses, and savings goals. Our intuitive interface allows you to visualize your financial data, identify spending patterns, and make adjustments to achieve a healthy financial balance.
          </p>
          <p>
            Our budgeting features include customizable categories, transaction tracking, goal setting, and detailed reports. Stay on top of your finances, track your progress, and make informed decisions to improve your financial well-being.
          </p>
          <p>
            By using SpendSmart, you'll gain valuable insights into your spending habits, identify potential savings opportunities, and develop a solid financial plan for the future. Take control of your finances and start your financial journey with SpendSmart today!
          </p>
        </div>
      </main>
      <footer className="footer">
       
        <p>&copy; 2023 SpendSmart Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

