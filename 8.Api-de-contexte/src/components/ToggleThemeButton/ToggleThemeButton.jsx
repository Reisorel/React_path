import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"

import "./ToggleThemeButton.css"
import { ThemeContext } from "../../context/ThemeProvider"
import { useContext } from "react"

export default function ToggleThemeButton() {

  const {toggleTheme, darkMode} = useContext(ThemeContext)

  return (
    <button
    onClick={toggleTheme}
    className="toggle-theme-btn">
      <span>Go {darkMode ? "Light" : "Dark"}</span>
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  )
}
