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

                {/* Utilisation de map pour créer des composants Collapse */}
                {dataArrayForOutlet.map((aboutCollapse, index) => (
                    <Collapse
                        key={`aboutCollapse-${index}`}
                        title={`${aboutCollapse.title}`}
                        text={`${aboutCollapse.text}`}
                        className={`collapse__about`}
                    >

                    </Collapse>
                ))}
            </main >
            <Footer />
        </>
    );
}

export default About;