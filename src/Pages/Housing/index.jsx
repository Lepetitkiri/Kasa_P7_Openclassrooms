import React from "react";
import { useParams } from 'react-router-dom';
import datas from '../../Ressources/housings.json';

{/*Components*/ }
import Header from '../../Components/Header/Index';
import Slideshow from '../../Components/Slideshow/Index';
import Dropdown from '../../Components/Dropdown/Index';
import Footer from '../../Components/Footer/Index';
import Error from '../Error';

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

        {/* Récupération des données concernant le logement pour passage via des props */ }
        const housingData = datas.find((item) => item.id === housingId);

        return (
            <>
                <Header />
                <main>
                    <Slideshow pictureArray={housingData.pictures} pictureAlt={housingData.title} />
                    Coucou la location n° {housingId}

                    <div className="collapse__housing">
                        <Dropdown
                            key={`aboutCollapse-${housingData.id}`}
                            title={`titre`}
                            text={`texte`}
                        />
                        <Dropdown
                            key={`aboutCollapse-${housingData.id}`}
                            title={`titre2`}
                            text={`texte2`}
                        />
                    </div>

                </main>
                <Footer />
            </>
        );
    }
}

export default Housing;