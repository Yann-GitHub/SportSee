import PropTypes from "prop-types"

/**
 * Component that displays a keyItem card with a category, value, unit, color, and icon.
 *
 * @param {Object} props - The props object.
 * @param {string} props.category - The category of the key item.
 * @param {number} props.value - The value of the key item.
 * @param {string} props.unit - The unit of the key item.
 * @param {string} props.color - The color of the key item.
 * @param {string} props.icon - The icon of the key item.
 * @returns {JSX.Element} - React component - KeyItem card.
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
  category: "Unknown ",
  value: "Unknown ",
  unit: "Unknown ",
  color: "Unknown ",
  icon: "Unknown ",
}

export default KeyItem
