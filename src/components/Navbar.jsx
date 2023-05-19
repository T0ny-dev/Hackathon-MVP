import { useAuth } from "../context/authContext.jsx";
import "../style/Navbar.css"

function Navbar () {

  const {user, logout, loading} = useAuth();

  return  (
    <div className="Navbar">
      <div className="Navbar__Logo">
        <img src="/logolaborcamp.svg" alt="" />
      </div>
      <div className="Navbar__link">
         <img src="Frame.png"></img>
        <a href="#">Explorar</a>
        <a href="#">Recursos</a>
        <a href="#">Rutas</a>
        <a href="#">Comunidad</a>
        <a href="#">Encuesta</a>
        <a href="#">Donar</a>
      </div>
      <div className="Navbar__avatar">
      <h4>👋 Hola!, {user.displayName || user.email}</h4>
        <img src="./avatarbear.png" alt="" />
      </div>
    </div>
  )

}

export default Navbar;