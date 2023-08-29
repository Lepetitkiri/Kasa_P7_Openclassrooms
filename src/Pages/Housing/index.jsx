import React from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Footer from '../../Components/Footer/Index';

function Housing() {

    {/* Récupération de l'id associé au logement : */ }
    const { housingId } = useParams();

    {/*Recherche de correspondance entre la base de données et l'ID récupéré dans l'URL */ }
    const isHousingIdCorrect = datas.find(item => item.id === housingId);

    {/* Si isHousingCorrect renvoi "undefined", cela signifie que l'Id récupéré est mauvais */ }
    isHousingIdCorrect === undefined ? console.log("Erreur") : console.log("Id conforme");


    return (
        <>
            <Header />
            <main> Housing page
            </main>
            <Footer />
        </>
    );
}

export default Housing;