import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Gallery from '../../Components/Gallery/Index';
import Footer from '../../Components/Footer/Index';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner className="banner__home" bannerText="Chez vous, partout et ailleurs" />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default Home;