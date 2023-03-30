import PropTypes from "prop-types"

function Banner({ firstName }) {
  // console.log(firstName)

  return (
    <div className="banner">
      <h1 className="banner__bonjour">
        Bonjour <span className="banner__firstname">{firstName}</span>
      </h1>
      <p className="banner__subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  )
}

Banner.propTypes = {
  firstName: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  firstName: "Unknow",
}

export default Banner
