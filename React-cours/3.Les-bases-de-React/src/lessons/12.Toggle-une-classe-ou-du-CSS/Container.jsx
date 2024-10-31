import { useState } from "react"
import "./Container.css"

export default function Container() {
  const [darkMode, setDarkmode] = useState(false)
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bievenue sur notesMania</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sed voluptas nesciunt, ab, eius quia praesentium expedita ea voluptate
        fugiat ipsam sapiente natus voluptatem exercitationem qui deserunt. Soluta beatae quasi autem
      </p>
      <button onClick={() => setDarkmode(!darkMode)}>Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
