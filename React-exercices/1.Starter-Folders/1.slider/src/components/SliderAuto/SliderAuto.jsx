// Importation de useState et useEffect
import { useState, useEffect } from "react";
// Importation image chevron gauche
import leftChevron from "../../assets/left-arrow.svg";
// Importation image chevron droit
import rightChevron from "../../assets/right-arrow.svg";
// Importation CSS
import "./Slider.css";
// Importation de l'objet sliderData
import sliderData from "../../data/sliderData";

export default function SliderAuto() {
  // État pour l'index du slider, initialisé à 1
  const [sliderIndex, setSliderIndex] = useState(1);
  // Fonction permettant de défilement du caroussel
  function toggleImage(indexPayload) {

    // let newState;

    // if (indexPayload + sliderIndex > sliderData.length) {
    //   newState = 1;

    // } else if (indexPayload + sliderIndex < 1) {
    //   newState = sliderData.length;
    // // Sinon,  l'index du slider en fonction de l'index actuel et du déplacement
    // } else {
    //   newState = indexPayload + sliderIndex;
    // }
    // setSliderIndex(newState);

    // Avec fonction callback 
    setSliderIndex(state => {
      if(indexPayload + state > sliderData.length){
        return 1
      }
      else if (indexPayload + state < 1) {
        return sliderData.length
      }
      else {
        return state + indexPayload
      }
    })
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000)

    return () => clearInterval(intervalID)
  },[])

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
