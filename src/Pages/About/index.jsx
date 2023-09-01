import React from "react";
import datas from '../../Ressources/about.json';
import './About.css';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Dropdown from '../../Components/Dropdown/Index';
import Footer from '../../Components/Footer/Index';

function About() {

    /*Récupération des infos attendues à partir des datas JSON */
    const dataArrayForCollapse = datas.map(item => ({
        title: item.title,
        text: item.text
    }));

    return (
        <>
            <Header />
            <main>
                <Banner className="banner__about" />
                <div className="collapse__about">

                    {/* Utilisation de map pour créer des composants Dropdown */}
                    {dataArrayForCollapse.map((aboutCollapse, index) => (
                        <Dropdown
                            key={`aboutCollapse-${index}`}
                            title={`${aboutCollapse.title}`}
                            text={`${aboutCollapse.text}`}
                        />
                    ))}
                </div >
            </main >
            <Footer />
        </>
    );
}

export default About;