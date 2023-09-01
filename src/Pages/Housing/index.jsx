import React from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';
import Error from '../Error';

function Housing() {

    {/* Récupération de l'id associé au logement */ }
    const { housingId } = useParams();


    {/*Fonction de vérification du format de l'ID via un masque Regex */ }
    let idRegex = /^[a-zA-Z0-9]+$/;

    if (!idRegex.test(housingId)) { // Si le format de l'ID est non conforme au masque Regex :
        window.alert("ID étrange ! Si tu essaie de pirater mon site tu vas avoir affaire à moi ! 🙅🙅🙅");
        return <Error />;

    } else { // Si le format de l'ID est conforme au Regex : recherche de correspondance dans la base de données
        const isHousingIdCorrect = datas.some(item => item.id === housingId);

        if (!isHousingIdCorrect) { // Si l'ID n'est pas dans la base de données : 
            window.alert("Mayday! On dirait qu'il y a un probleme 😱!");
            return <Error />;

        } else // Si tout est OK, on execute le render

            return (
                <>
                    <Header />
                    <main>
                        Coucou la location n° {housingId}

                        <Collapse />
                    </main>
                    <Footer />
                </>
            );
    }
}

export default Housing;