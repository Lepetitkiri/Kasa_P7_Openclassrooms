import React, { createContext } from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Slideshow from '../../Components/Slideshow/Index';
import PresentationLocation from '../../Components/PresentationLocation/Index';
import PresentationHost from '../../Components/PresentationHost/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';
import Error from '../Error';

{/*Provider*/ }
export const MyContextFromHousingPageForCollapse = createContext();
export const MycontextFromHousingPageForPresentation = createContext();

function Housing() {

    {/* Récupération de l'id associé au logement */ }
    const { housingId } = useParams();

    {/*Fonction de vérification du format de l'ID via un masque Regex */ }
    let idRegex = /^[a-zA-Z0-9]+$/;

    {/*Recherche de correspondance dans la base de données */ }
    const isHousingIdCorrect = datas.some(item => item.id === housingId);


    if (!idRegex.test(housingId) || !isHousingIdCorrect) { // Si le format de l'ID est non conforme au masque Regex ou qu'il n'est pas trouvé dans la base de données :
        return <Error />;
    } else {

        {/* Récupération de toutes les données concernant le logement */ }
        const housingData = datas.find((item) => item.id === housingId);

        /*Stockage des infos à fournir au composant collapse à l'aide d'un Provider */
        const dataArrayForHostPart = {
            hostName: housingData.host.name,
            hostPicture: housingData.host.picture,
            rating: housingData.rating
        }

        /*Stockage des infos à fournir au composant collapse à l'aide d'un Provider */
        const dataArrayForCollapse = [
            { title: "Description", text: housingData.description, className: "collapse__housing" },
            { title: "Equipements", text: housingData.equipments, className: "collapse__housing" }
        ];

        return (
            <>
                <Header />
                <main>
                    <Slideshow pictureArray={housingData.pictures} pictureAlt={housingData.title} />

                    <MycontextFromHousingPageForPresentation.Provider value={dataArrayForHostPart}>
                        <PresentationLocation />
                        <PresentationHost />
                    </MycontextFromHousingPageForPresentation.Provider>

                    <MyContextFromHousingPageForCollapse.Provider value={dataArrayForCollapse}>
                        <Collapse page="housing" />
                    </MyContextFromHousingPageForCollapse.Provider>

                </main >
                <Footer />
            </>
        );
    }
}

export default Housing;