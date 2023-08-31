import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Outlet from "../../Components/Outlet/Index";
import Footer from '../../Components/Footer/Index';

function About() {
    return (
        <>
            <Header />
            <main>
                <Banner className="banner__about" />
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default About;