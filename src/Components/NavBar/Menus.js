import { NavLink } from 'react-router-dom';
import "../../Styles/Menus.css";

const Menus = () => {
  return (
    <section className='menus p-2 p-md-4  d-flex gap-md-5 gap-4 justify-content-center flex-wrap'>
      <NavLink to="/" className="navlink px-sm-4 py-sm-1">HOME</NavLink>
      <NavLink to="/services" className="navlink px-sm-4 py-sm-1">SERVICES</NavLink>
      <NavLink to="/studies" className="navlink px-sm-4 py-sm-1">CASE STUDIES</NavLink>
      <NavLink to="/faq" className="navlink px-sm-4 py-sm-1">FAQ</NavLink>
      <NavLink to="/careers" className="navlink px-sm-4 py-sm-1">Careers</NavLink>
      <NavLink to="/contact" className="navlink px-sm-4 py-sm-1">CONTACT US</NavLink>
    </section>
  )
}
export default Menus
