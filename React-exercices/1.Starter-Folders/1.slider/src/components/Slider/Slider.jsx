import { useState } from "react";
// Importation image chevron gauche
import leftChevron from "../../assets/left-arrow.svg";
// Importation image chevron droit
import rightChevron from "../../assets/right-arrow.svg";
// Importation CSS
import "./Slider.css";
// Importation de l'objet sliderData
import sliderData from "../../data/sliderData";

export default function Slider() {
  // État pour l'index du slider, initialisé à 1
  const [sliderIndex, setSliderIndex] = useState(1);
  // Fonction permettant de défilement du caroussel
  function toggleImage(indexPayload) {

    // Initialise une variable pour calculer le nouvel index du slider
    let newState;
    // Si l'index actuel plus le déplacement dépasse le nombre total d'images,
    // revient à la première image
    if (indexPayload + sliderIndex > sliderData.length) {
      newState = 1;
    // Si l'index actuel moins le déplacement est inférieur à 1,
    // revient à la dernière image
    } else if (indexPayload + sliderIndex < 1) {
      newState = sliderData.length;
    // Sinon, ajuste l'index du slider en fonction de l'index actuel et du déplacement
    } else {
      newState = indexPayload + sliderIndex;
    }
    // Met à jour l'index du slider avec le nouvel index calculé
    setSliderIndex(newState);
  }

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next-image" />
        </button>
      </div>
    </>
  );
}
