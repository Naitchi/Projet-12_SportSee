// Css
import './customToolTip.css';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <p className="desc">{payload[0].value}kg</p>
        <p className="desc">{payload[1].value}Kcal</p>
      </div>
    );
}

export default CustomTooltip;
