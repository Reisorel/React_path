import "./Content.css"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function Content() {

  const {darkMode} = useContext(ThemeContext)

  return (
    <div className="container">
      Content
      <h1>You are in {darkMode? "Dark" : "Light"} mode.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        ipsum. Iste explicabo earum harum voluptate libero. Fuga ratione dolore
        vero, fugit ducimus facere recusandae voluptates excepturi saepe.
        Tenetur cumque mollitia officia exercitationem beatae, aliquam commodi
        iure atque voluptatum tempore! Vero velit accusantium nisi, ipsum, nihil
        necessitatibus repellendus illum facilis, magni inventore nulla rerum
        sapiente eius cumque! Reiciendis dolorum eos beatae dignissimos laborum
        minus eius aperiam, maxime temporibus. Dicta eligendi autem quod commodi
        maiores dignissimos voluptatum nihil, saepe debitis sed omnis alias
        quisquam optio molestiae, obcaecati repudiandae, dolor nam aliquam?
        Perferendis necessitatibus eius illum consequatur vel distinctio dolorum
        facere nulla voluptas!
      </p>
    </div>
  );
}
