import "../../Styles/Menus.css";
import { NavLink } from 'react-router-dom';


const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navlink px-sm-4 py-sm-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/about" className="dropdown-item">OUR ABOUT</NavLink></li>
            <li><NavLink to="/discipline" className="dropdown-item">JOIN US</NavLink></li>
            <li><NavLink to="/parents" className="dropdown-item">PARENTS CO-OPERATION</NavLink></li>
            <li><NavLink to="/rules" className="dropdown-item">RULES AND REGULATIONS</NavLink></li>
            <li><NavLink to="/events" className="dropdown-item">CELEBRATIONS</NavLink></li>
            <li><NavLink to="/otherservices" className="dropdown-item">OTHER SERVICES</NavLink></li>
          </ul>
      </div>
      <NavLink to="/services" className="navlink px-sm-4 py-sm-1">SERVICES</NavLink>
      <NavLink to="/services" className="navlink px-sm-4 py-sm-1">CASE STUDIES</NavLink>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">FAQ</NavLink>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT</NavLink>
    </section>
  )
}
export default Menus
