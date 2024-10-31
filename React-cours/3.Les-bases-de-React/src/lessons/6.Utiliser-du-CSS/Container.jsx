import "./Container.css"
export default function Container() {

  const bgColor = "#333"

  return (
    <div>
      <h1 style = {{color: "crimson", backgroundColor: bgColor}}>Utiliser du CSS</h1>
      <p className="txt">Hola bobo</p>
    </div>
  )
}
