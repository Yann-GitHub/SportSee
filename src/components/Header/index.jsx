import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.svg"

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="error-404" className="header__link">
          Profil
        </NavLink>
        <NavLink to="error-404" className="header__link">
          Réglage
        </NavLink>
        <NavLink to="error-404" className="header__link">
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
