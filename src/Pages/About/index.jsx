import React, { createContext } from "react";
import datas from '../../Ressources/about.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';

{/*Provider*/ }
export const MyContextFromAboutPage = createContext();

function About() {

    /*Stockage des infos à fournir au composant collapse à l'aide d'un Provider */
    const dataArrayForCollapse = datas.map(item => ({
        title: item.title,
        text: item.text,
        className: "collapse__about"
    }));

    return (
        <>
            <Header />
            <main>
                <Banner className="banner__about" />
                <MyContextFromAboutPage.Provider value={dataArrayForCollapse}>
                    <Collapse page="about" />
                </MyContextFromAboutPage.Provider>
            </main >
            <Footer />
        </>
    );
}

export default About;