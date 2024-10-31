import {Link, NavLink} from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="p-2 text-center bg-slate-300">
      <NavLink
      to="/"
      // className={({ isActive }) => `${isActive && "bg-amber-400"}
      // mx-2 text-md font-semibold`}
      className="mx-2 text-md text-semibold"
      >
      Home
      </NavLink>
      <Link
      to="/analytics"
      className="mx-2 text-md text-semibold"
      >Analytics</Link>
      <Link
      state={{txt: "State"}}
      to="/contact"
      className="mx-2 text-md text-semibold"
      >Contacts</Link>
    </nav>
  )
}
