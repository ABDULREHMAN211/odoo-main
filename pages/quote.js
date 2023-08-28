import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import Qform from './Qform';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Get A Quote" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Get A Quote" 
                />
                <Qform/>
                {/* <ContactForm /> */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;