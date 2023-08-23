import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Footer from '../../Components/Footer/Index';

function Home() {
    return (
        <>
            <Header />
            <Banner className="banner__home" />
            <main> Home page
            </main>
            <Footer />
        </>
    );
}

export default Home;