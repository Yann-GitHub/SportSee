import { Link } from "react-router-dom"
import ImgError from "../../assets/page_not_found.svg"

/**
 * Component representing the Error page.
 *
 * @returns {JSX.Element} - The Error page component.
 */

function Error() {
  return (
    <div className="error-content">
      <img src={ImgError} alt="error" className="error-content__img" />
      <h2 className="error-content__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error-content__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
