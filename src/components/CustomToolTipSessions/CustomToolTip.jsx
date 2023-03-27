// Css
import './customToolTip.css';

/**
 * The custom tooltip component for the Sessions component
 *
 * @param {boolean} active
 * @param {array} payload
 * @returns the custom tooltip component
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length)
    return (
      <div className="tooltip-sessions">
        <p className="desc">
          {payload[0].value} min{payload[0].value > 1 ? 's' : ''}
        </p>
      </div>
    );
}

export default CustomTooltip;
