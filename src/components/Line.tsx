import { animated, useSpring } from "@react-spring/web";

interface LineProps {
  start: [number, number];
  end: [number, number];
}

const Line = (props: LineProps) => {
  const { start, end } = props;

  const [animateProps, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 4000 },
    }),
    [],
  );

  return (
    <animated.line
      style={animateProps}
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
