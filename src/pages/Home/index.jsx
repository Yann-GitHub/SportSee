import { Link } from "react-router-dom"
import UserImage from "../../assets/profile.png"

function Home() {
  return (
    <div className="home-content">
      <div className="home-content__titlebox">
        <h1 className="home-content__title">Home page</h1>
        <h2 className="home-content__subtitle">Choose a user</h2>
      </div>
      <div className="home-content__usersbox">
        <div className="home-content__user">
          <img className="home-content__img" src={UserImage} alt="user" />
          <Link to="/user/:id" className="home-content__link">
            User 1
          </Link>
        </div>
        <div className="home-content__user">
          <img className="home-content__img" src={UserImage} alt="user" />
          <Link to="/user/:id" className="home-content__link">
            User 2
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
