import useAPIcall from "./hooks/useAPICall"
import spinner from "./spinner.svg"

export default function Container() {
  const {catData, error, loading} = useAPIcall()

  let content;
  if((loading && !error)) {
      content = <img src = {spinner} alt ="blabla"/>
  } else if (error) {
    content = <p>Une erreur est survenue ...</p>
  } else if (catData) {
    content = <img src={catData[0].url} alt="photo d'un chat"/>
  }

  return (
    <div>
      <h1>Photos de chats</h1>
      {content}
    </div>
  )
}
