import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="error-content">
      <div className="error-content__titlebox">
        <h1 className="error-content__title">404</h1>
        <h2 className="error-content__subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/" className="error-content__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
