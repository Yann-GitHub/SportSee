import PropTypes from "prop-types"

/**
 * Banner component that displays a greeting message and a subtitle.
 *
 * @param {object} props - The props object.
 * @param {string} props.firstName - The first name of the user to display in the greeting message.
 * @returns {JSX.Element} - The rendered banner component
 */

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
