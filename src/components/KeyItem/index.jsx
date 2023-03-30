import PropTypes from "prop-types"

/**
 * Component used for KeyItemContainer
 * @param {string} props.category
 * @param {number} props.value
 * @param {string} props.unit
 * @param {string} props.color
 * @param {string} props.icon
 * @returns {JSX}
 */

function KeyItem({ category, value, unit, color, icon }) {
  // console.log(category)
  // console.log(value)
  // console.log(unit)
  // console.log(color)
  // console.log(icon)
  return (
    <div className="keyItem">
      <div className="keyItem__left">
        <div
          className={`keyItem__icon-wrapper keyItem__icon-wrapper--${color}`}
        >
          <img src={icon} alt={`icon-${category}`} className="keyItem__icon" />
        </div>
      </div>
      <div className="keyItem__right">
        <p className="keyItem__value">
          {value}
          {unit}
        </p>
        <p className="keyItem__category">{category}</p>
      </div>
    </div>
  )
}

KeyItem.propTypes = {
  category: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

KeyItem.defaultProps = {
  category: "Unknow ",
  value: "Unknow ",
  unit: "Unknow ",
  color: "Unknow ",
  icon: "Unknow ",
}

export default KeyItem
