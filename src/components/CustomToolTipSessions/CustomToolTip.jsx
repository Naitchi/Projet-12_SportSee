// Css
import './customToolTip.css';

function CustomTooltip({ active, payload, label }) {
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
