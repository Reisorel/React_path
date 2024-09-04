
import Child from "./Child"

export default function Container() {

  return (
    <div>
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam.</p>
      </Child>
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam.</p>
      </Child>
      <Child>
        <button>Valider</button>
      </Child>
      <Child>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
      </Child>
    </div>
  )
}
