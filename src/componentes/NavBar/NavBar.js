import Subtitulos from "../Subtitulo/Subtitulos"
import "./style.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
            <Subtitulos texto="CiberShop"/>
            <Subtitulos texto="Electro"/>
            <Subtitulos texto="Jardineria"/>
            <Subtitulos texto="Cocina"/>
        </div>
  )
}

export default NavBar