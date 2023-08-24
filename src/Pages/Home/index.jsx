import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import HomeStyle from './Style';
import Footer from '../../Components/Footer/Index';

function Home() {
    return (
        <>
            <Header />
            <Banner className="banner__home" />
            <HomeStyle>
                <section className="gallery__home">
                    <p>Home page en cours</p>
                </section>
            </HomeStyle>
            <Footer />
        </>
    );
}

export default Home;