import { NavLink } from "react-router-dom"
import {SiLeetcode} from "react-icons/si"


const Navbar = () => {
  return (
      <nav className="p-4 bg-sky-50 shadow-sm" >
          <ul className="flex gap-8 justify-center">
          <NavLink to="/"><span className="flex items-center gap-1  font-mono"><SiLeetcode />LETSCODE</span> </NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/signup">SIGNUP</NavLink>
          <NavLink to="/problems">PROBLEMS</NavLink>
          </ul>
        
        </nav>
    )
}

export default Navbar