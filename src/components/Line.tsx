import { animated } from "@react-spring/web";

interface LineProps {
  start: [number, number];
  end: [number, number];
}

const Line = (props: LineProps) => {
  const { start, end } = props;

  return (
    <animated.line
      x1={start[0]}
      y1={start[1]}
      x2={end[0]}
      y2={end[1]}
      stroke="black"
      strokeWidth={3}
    />
  );
};

export default Line;
