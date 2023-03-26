function KeyItem({ category, value, unit, color, icon }) {
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

export default KeyItem
