import fuji from "./assets/fuji.jpg"
import triangle from "./assets/triangle.svg"
export default function Container() {

  console.log(fuji);

  return (
    <div>
      {/* <h1>Utiliser des images</h1>
      <p>Image</p>
      <img src={fuji} alt="Mont Fuji" />
      <p>Utiliser des images du dossier public</p>
      <img src="/assets/forest-1.jpg" alt="Forest" /> */}

      <p>SVGs</p>
      <img src={triangle} alt="triangle" />

    </div>
  )
}
