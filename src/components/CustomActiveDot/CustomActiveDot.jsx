/**
 * The custom Active Dot component for the Sessions component
 *
 * @param {number} cx
 * @param {number} cy
 * @param {string} stroke
 * @param {number} strokeWidth
 * @returns the custom Active Dot Component
 */
const CustomActiveDot = (props) => {
  const { cx, cy, stroke, strokeWidth } = props;

  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill="#fff" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx={cx} cy={cy} r={9} fill="#fff" stroke={stroke} strokeWidth={2} opacity={0.2} />
    </g>
  );
};

export default CustomActiveDot;
