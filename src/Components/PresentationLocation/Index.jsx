import React, { useContext } from "react";
import PresentationLocationStyle from "./Style.jsx";

{/*Components*/ }
import Tag from '../Tag/Index.jsx';

{/*Contextes du provider*/ }
import { MycontextFromHousingPageForPresentation } from '../../Pages/Housing/index.jsx';

function PresentationLocation() {

  {/*Récupération des datas provenant du provider */ }
  const PresentationDatasFromContext = useContext(MycontextFromHousingPageForPresentation);
  const ArrayForTag = PresentationDatasFromContext.tags

  return (
    <PresentationLocationStyle className='presentation__location'>
      <h2 className="presentation__location__title"> {PresentationDatasFromContext.title} </h2>
      <h3 className="presentation__location__subtitle"> {PresentationDatasFromContext.location} </h3>
      <div className="presentation__location__tag" >
        {ArrayForTag.map((tags, index) => (
          <Tag key={`location-tag-${index}`} tags={tags} />
        ))}
      </div>
    </PresentationLocationStyle >
  );
}

export default PresentationLocation;