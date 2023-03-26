import { Link } from "react-router-dom"
// import UserImage from "../../assets/profile.png"
import AvatarMale1 from "../../assets/male_avatar1.svg"
import AvatarMale2 from "../../assets/male_avatar2.svg"
import AvatarFemale1 from "../../assets/female_avatar1.svg"
import AvatarFemale2 from "../../assets/female_avatar2.svg"

function Home() {
  return (
    <div className="home-content">
      <div className="home-content__titlebox">
        <h1 className="home-content__title">Home page</h1>
        <h2 className="home-content__subtitle">
          Select a user and the source of the data
        </h2>
      </div>
      <div className="home-content__usersbox">
        <div className="home-content__data-category">
          <div className="home-content__user">
            <Link to="/user/22" className="home-content__link">
              <img className="home-content__img" src={AvatarMale1} alt="user" />
              <div className="home-content__name">Bobby - Mock Data</div>
            </Link>
          </div>
          <div className="home-content__user">
            <Link to="/user/28" className="home-content__link">
              <img
                className="home-content__img"
                src={AvatarFemale2}
                alt="user"
              />
              <div className="home-content__name">Simona - Mock Data</div>
            </Link>
          </div>
        </div>

        <div className="home-content__data-category">
          <div className="home-content__user">
            <Link to="/user/12" className="home-content__link">
              <img className="home-content__img" src={AvatarMale2} alt="user" />
              <div className="home-content__name">Karl - API Data</div>
            </Link>
          </div>

          <div className="home-content__user">
            <Link to="/user/18" className="home-content__link">
              <img
                className="home-content__img"
                src={AvatarFemale1}
                alt="user"
              />
              <div className="home-content__name">Cécilia - API Data</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
