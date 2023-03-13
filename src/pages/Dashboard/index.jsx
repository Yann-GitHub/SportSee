import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-content__titlebox">
        <h1 className="dashboard-content__title">Dashboard</h1>
        <h2 className="dashboard-content__subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h2>
      </div>
      <Link to="/" className="dashboard-content__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Dashboard
