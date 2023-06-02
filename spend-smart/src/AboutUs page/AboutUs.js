import React, { Fragment } from 'react';
import '../CSS/AboutUs.css';
import image from '../image/tracker.jpg'
import pic1 from '../image/pic-1.png';
import pic3 from '../image/pic-3.png';
import pic2 from '../image/pic-2.png';
import doc from '../image/doc-6.jpg';
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin,AiOutlineArrowRight} from "react-icons/ai";

const AboutUs = () => {
  return (
<Fragment>
<div className="page-container">
  <section className="about" id="about">

<h1 className="heading"> <span>about</span> us </h1>

<div className="row">

    <div className="image">
     
        <img src={image} alt=""/>
        {/* <lottie animationData={image}/> */}
    </div>

    <div className="content">
        <h3>Welcome to the "SpendSmart"</h3>
        <p>A SpendSmart website is a powerful tool that helps individuals and businesses manage their finances effectively. With a SpendSmart, users can easily track their income, expenses, savings, and investments in one centralized platform. In this article, we will explore the key features and benefits of a budget tracker website, along with tips for building and using one.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
        <a href='#c2' className="btn"> learn more<AiOutlineArrowRight/> </a>
      
    </div>

</div>

   <div className="content2" id='c2'>
        <h3>Features and Benefits</h3>
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

    <div className="content3" id='c3'>
        <h3>Our Mission</h3>
        <p>
         At SpendSmart, our mission is to empower individuals and families to take control of their finances and achieve their financial goals. We understand that managing money can be challenging, but with the right tools and guidance, anyone can build a solid financial foundation.
</p> 
    </div>

    <div className="content3" id='c3'>
        <h3>Our Expert Team</h3>
        <p>
  Our team of financial experts brings a wealth of knowledge and experience in budgeting, personal finance, and money management. We are dedicated to providing you with the resources and tools you need to make informed financial decisions and succeed in your financial journey.
</p> 
    </div>


</section>

<section class="team" id="team">

<h1 class="heading"> our <span>Team</span> </h1>

<div class="box-container">

<div class="box">
<img src={doc} alt=""/>
<h3>Abdullah</h3>
<span>Back-end developer</span>
<div class="share">
    <a href="#" className="fab fa-facebook-f"><AiFillFacebook/></a>
    <a href="#" class="fab fa-twitter"><AiOutlineTwitter/></a>
    <a href="#" class="fab fa-instagram"><AiOutlineInstagram/></a>
    <a href="#" class="fab fa-linkedin"><AiFillLinkedin/></a>
</div>
</div>

<div className="box">
<img src={pic1} alt=""/>
<h3>Amen Aziz</h3>
<span>Front-end developer</span>
<div class="share">
    <a href="#" className="fab fa-facebook-f"><AiFillFacebook/></a>
    <a href="#" class="fab fa-twitter"><AiOutlineTwitter/></a>
    <a href="#" class="fab fa-instagram"><AiOutlineInstagram/></a>
    <a href="#" class="fab fa-linkedin"><AiFillLinkedin/></a>
</div>
</div>

<div className="box">
<img src={pic3} alt=""/>
<h3>Junaid</h3>
<span>Graphic designer</span>
<div class="share">
    <a href="#" className="fab fa-facebook-f"><AiFillFacebook/></a>
    <a href="#" class="fab fa-twitter"><AiOutlineTwitter/></a>
    <a href="#" class="fab fa-instagram"><AiOutlineInstagram/></a>
    <a href="#" class="fab fa-linkedin"><AiFillLinkedin/></a>
</div>
</div>

</div>

</section>
<footer className="footer">
       
           <p>&copy; 2023 SpendSmart Website. All rights reserved.</p>
         </footer>
  </div>


</Fragment>
   
  );
};
 //   <footer className="footer">
       
    //     <p>&copy; 2023 SpendSmart Website. All rights reserved.</p>
    //   </footer>
    // </div>
export default AboutUs;

