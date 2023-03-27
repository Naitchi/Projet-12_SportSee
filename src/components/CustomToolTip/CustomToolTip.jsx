// Css
import './customToolTip.css';

/**
 * The custom tooltip component for the Performance component
 *
 * @param {boolean} active
 * @param {array} payload
 * @returns the custom tooltip component
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <p className="desc">{payload[0].value}kg</p>
        <p className="desc">{payload[1].value}Kcal</p>
      </div>
    );
}

export default CustomTooltip;
