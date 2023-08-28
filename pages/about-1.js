import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class About1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/"
                />
                {/* <MakeYourBusiness /> */}
                {/* <Testimonials /> */}
                {/* <TeamTwo /> */}
                <div className="pb-50">
                    {/* <Partner /> */}
                </div>
                <About />
                <div className='p-3'>
                <h5>Our journey of continuous innovation</h5>
                  <p>Odoo-AI offers technological-power development, QA and Artificial Intelligence Solutions 
                  for various clients world wide. Our expertise covers a wide spectrum due to which we provide AI Automation, 
                  QA testing and other consulting services to enhance the ROI of your business in the most possible ways.
                  </p>
                  <p>
                  Odoo Ai started its journey 2010 with a big dream and vision to assist companies. We, with limited employes, 
                  promised to deliver high end development services and solutions. At the start, we merely focused on the development
                  and primarily on artificial intelligence, testing, software quality processes, and automation solutions so all enterprises 
                  will increase the demand for web based services and products. Over the years, we built our reputation
                  with quality work into digital and technological processes. We trying to assist our clients by managing
                  the complexity of market pressure and testing capabilities.
                  </p>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default About1;