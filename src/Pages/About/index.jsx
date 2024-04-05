import React, { createContext } from "react";
import datas from '../../Ressources/about.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';

{/*Provider*/ }
export const MyContextFromAboutPageForCollapse = createContext();

function About() {

    /* Stockage des informations à fournir au composant collapse à l'aide d'un Provider */
    /**
     * Stocke les informations à fournir au composant collapse à l'aide d'un Provider.
     * @param {Object[]} datas - Les données à mapper pour créer les éléments du collapse.
     * @returns {Object[]} Un tableau d'objets contenant les informations nécessaires au composant collapse.
     */
    const dataArrayForCollapse = datas.map(item => ({
        title: item.title,
        text: item.text,
        className: "collapse__about"
    }));

    return (
        <>
            <Header />
            <main>
                <Banner className="banner__about" bannerText="A propos du site de location Kasa" />
                <MyContextFromAboutPageForCollapse.Provider value={dataArrayForCollapse}>
                    <Collapse page="about" />
                </MyContextFromAboutPageForCollapse.Provider>
            </main >
            <Footer />
        </>
    );
}

export default About;