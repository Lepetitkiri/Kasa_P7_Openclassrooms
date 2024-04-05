import React, { createContext } from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Slideshow from '../../Components/Slideshow/Index';
import Presentation from '../../Components/Presentation/Index';
import Collapse from '../../Components/Collapse/Index';
import Footer from '../../Components/Footer/Index';
import Error from '../Error';

{/*Provider*/ }
export const MyContextFromHousingPageForCollapse = createContext();
export const MycontextFromHousingPageForPresentation = createContext();

function Housing() {

    /**
     * Récupère l'ID associé au logement à partir des paramètres de l'URL.
     * @param {string} housingId - L'identifiant du logement récupéré des paramètres de l'URL.
     */
    const { housingId } = useParams();

    let idRegex = /^[a-zA-Z0-9]+$/;

    /**
    * Vérifie si l'ID du logement correspond à un ID présent dans la base de données.
    * @param {Object[]} datas - Le tableau de données contenant les informations sur les logements.
    * @param {string} housingId - L'identifiant du logement à vérifier.
    */
    const isHousingIdCorrect = datas.some(item => item.id === housingId);


    if (!idRegex.test(housingId) || !isHousingIdCorrect) { // Si le format de l'ID est non conforme au masque Regex ou qu'il n'est pas trouvé dans la base de données :
        return <Error />;
    } else {

        /**
        * Récupère toutes les informations associées à un logement spécifique à partir de son ID.
        * @param {Object[]} datas - Le tableau de données contenant les informations sur les logements.
        * @param {string} housingId - L'identifiant du logement à récupérer.
        */
        const housingData = datas.find((item) => item.id === housingId);

        /**
        * Stocke les informations à fournir au composant collapse pour la partie hébergeur.
        * @param {string} title - Le titre du logement.
        * @param {string} location - L'emplacement du logement.
        * @param {string} hostName - Le nom de l'hébergeur.
        * @param {string} hostPicture - L'URL de la photo de l'hébergeur.
        * @param {string} rating - Le classement du logement.
        * @param {string[]} tags - Les tags associés au logement.
        */
        const dataArrayForHostPart = {
            title: housingData.title,
            location: housingData.location,
            hostName: housingData.host.name,
            hostPicture: housingData.host.picture,
            rating: housingData.rating,
            tags: housingData.tags
        }

        /**
        * Stocke les informations à fournir au composant collapse pour la partie logement à l'aide d'un provider.
        * @param {string} title - Le titre de la section.
        * @param {string} text - Le texte à afficher dans la section.
        * @param {string} className - La classe CSS à appliquer à la section.
        */
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
                        <Presentation />
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