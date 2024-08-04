import {useState} from "react"
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem"

function App() {

  const [todoList, setTodoList] = useState([
    { id: nanoid(), content: "item 1"},
    { id: nanoid(), content: "item 2"},
    { id: nanoid(), content: "item 3"},
  ])

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La Todo-list</h1>

        <form className="mb-10">
          <label htmlFor="todo-item"
            className="text-slate-50">Ajouter une chose à faire
          </label>
          <input type="text" className="mt-1 block w-full rounded" />
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w[115px]">Ajouter</button>
        </form>
        <ul>
          {todoList.map(item =>(
          <ListItem key = {item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default App
