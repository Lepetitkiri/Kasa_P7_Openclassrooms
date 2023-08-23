import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Footer from '../../Components/Footer/Index';

function About() {
    return (
        <>
            <Header />
            <Banner className="banner__about" />
            <main> About page
            </main>
            <Footer />
        </>
    );
}

export default About;