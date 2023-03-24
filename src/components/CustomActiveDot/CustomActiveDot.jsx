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
