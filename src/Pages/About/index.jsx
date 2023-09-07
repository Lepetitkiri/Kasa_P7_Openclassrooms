import React, { createContext } from "react";
import datas from '../../Ressources/about.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Banner from '../../Components/Banner/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';

{/*Provider*/ }
export const MyContext = createContext();

function About() {

    /*Récupération des infos attendues à partir des datas JSON */
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
                <MyContext.Provider value={dataArrayForCollapse}>
                    <Collapse />
                </MyContext.Provider>
            </main >
            <Footer />
        </>
    );
}

export default About;