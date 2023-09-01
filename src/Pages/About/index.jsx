import React from "react";
import datas from '../../Ressources/about.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Collapse from "../../Components/Collapse/Index";
import Footer from '../../Components/Footer/Index';

function About() {

    {/*Récupération des infos attendues à partir des datas JSON */ }
    const dataArrayForOutlet = datas.map(item => ({
        title: item.title,
        text: item.text
    }));

    return (
        <>
            <Header />
            <main>
                <Banner className="banner__about" />
                {dataArrayForOutlet.map(outletKey => (
                    <Collapse key={`outlet-about-${outletKey.id}`} />
                ))
                }
            </main >
            <Footer />
        </>
    );
}

export default About;